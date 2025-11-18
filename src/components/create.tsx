import { useState } from "react"
import toast from "react-hot-toast"
import supabase from "@/config/supabaseClient"

const Create = () => {

    const [formError, setFormError] = useState<string | null>(null)

    interface FormDataType {
        title: string;
        description: string;
        price: string;
        image: File | null;
        category: string;
    }

    const [formData, setFormData] = useState<FormDataType>({
        title: "",
        description: "",
        price: "",
        image: null,
        category: "",
    })

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     const { name, value } = e.target;
    //     setFormData((prev) => ({
    //         ...prev, [name]: value
    //     })
    //     );
    // }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, files } = e.target as HTMLInputElement;

        if (name === "image" && files && files[0]) {
            setFormData(prev => ({ ...prev, image: files[0] }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const { title, description, price, image, category } = formData; //destructuring form data for readability

        if (!title || !description || !price || !image || !category) {
            const message = "Please fill in all the fields correctly";
            setFormError(message);
            toast.error(message, { duration: 10000 }); // 30 seconds
            return;
        }



        try {
            // 1️⃣ Upload image to Supabase Storage (replace 'product-images' with your bucket name)
            const filePath = `images/${Date.now()}_${image.name}`;
            const { data: uploaded, error: uploadError } = await supabase.storage
                .from("product-images")
                .upload(filePath, image);

            if (uploadError) throw uploadError;

            // 2️⃣ Get the public URL
            const { data: publicUrlData } = supabase.storage
                .from("product-images")
                .getPublicUrl(uploaded.path);

            const imageUrl = publicUrlData.publicUrl;

            // 3️⃣ Insert product record using the image URL
            const { data, error } = await supabase
                .from("products")
                .insert([
                    {
                        title,
                        description,
                        price,
                        category,
                        image: imageUrl, // store URL, not the file
                    },
                ])
                .select();

            if (error) throw error;

            console.log("Inserted:", data);

            setFormData({
                title: "",
                description: "",
                price: "",
                image: null,
                category: "",
            });
            setFormError(null);
            toast.success("Submitted successfully");
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong. Try again.");
        }
    };

    return (
        <>
            <div className="">
                <h2 className=""></h2>
                <form onSubmit={handleSubmit}
                    className="grid grid-cols-2 gap-8 place-content-center mx-auto p-4 min-h-screen">
                    <div className="flex flex-col gap-4">
                        <label htmlFor="title" className="">Title:</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="border-[#d1d9ce] border-2 rounded w-full"
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <label htmlFor="description" className="">Description:</label>
                        <textarea
                            value={formData.description}
                            name="description"
                            id="description"
                            onChange={handleChange}
                            className="border-[#d1d9ce] border-2 rounded w-full"
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <label htmlFor="image" className="">Image:</label>
                        <input
                            type="file"
                            accept="image/*"
                            name="image"
                            id="image"
                            // value={formData.image}
                            onChange={handleChange}
                            className="border-[#d1d9ce] border-2 rounded w-full h-20"
                        />

                        {formData.image && (
                            <div className="mt-2">
                                <p className="text-sm text-gray-600">Preview:</p>
                                <img
                                    src={URL.createObjectURL(formData.image)}
                                    alt="preview"
                                    className="w-40 h-40 object-cover rounded border border-gray-300"
                                />
                            </div>
                        )}




                    </div>

                    <div className="flex flex-col gap-4">
                        <label htmlFor="price" className="">Price:</label>
                        <input
                            type="text"
                            name="price"
                            id="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="border-[#d1d9ce] border-2 rounded w-full"
                        />
                    </div>


                    <div className="flex flex-col gap-4">
                        <label htmlFor="category" className="">Category:</label>
                        <input
                            type="text"
                            name="category"
                            id="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="border-[#d1d9ce] border-2 rounded w-full"
                        />
                    </div>


                    <button className="">Add New Product</button>

                    {/* {formError &&
                    (<p className="h-screen flex items-center justify-center">\
                        {formError}
                    </p>
                    )} */}
                </form>
            </div>
        </>

    )
}

export default Create