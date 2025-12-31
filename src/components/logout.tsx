import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context-and-reducer/AuthContext";
import toast from "react-hot-toast";
import { LogOut, X } from "lucide-react";



function Logout() {
    const [confirm, setConfirm] = useState(false);
    const { signOut, loading } = useAuth();

    const navigate = useNavigate()

    const handleSignOut = async () => {

        try {
            await signOut();
            toast.success("Signed out successfully");
            navigate("/signin");
        } catch {
            toast.error("Something went wrong");
        }
    };


    return (
        <>

            {/* Sign-out icon button */}
            <button
                onClick={() => setConfirm(true)}
                disabled={loading}
                className="hidden lg:flex p-2 rounded-md border-gray-700 dark:bg-gray-900 dark:text-[#d1d9ce] hover:bg-[#1a1a1a] hover:text-[#d1d9ce] disabled:opacity-50"
            >
                {loading ? "Signing out..." : <LogOut size={15} strokeWidth={3} />}

            </button>



            {confirm && (
                <>
                    {/* Overlay */}
                    <div
                        onClick={() => {
                            setConfirm(false);
                        }}
                        className="fixed inset-0 bg-black/50 dark:bg-white/20 flex items-center justify-center z-50"
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="relative rounded-lg shadow flex flex-col gap-4 mx-auto bg-[#d1d9ce] dark:bg-[#809679] w-[300px] sm:w-[400px] px-2 h-auto pt-2 pb-8 z-50"
                        >
                            <div className="flex items-start justify-between p-4">
                                <p className="font-bold text-lg text-left">Logout</p>
                                <X
                                    className="w-6 h-6 cursor-pointer"
                                    onClick={() => {
                                        setConfirm(false);
                                    }}
                                />
                            </div>
                            <p className="text-black dark:text-white mx-auto">
                                Are you sure you want to logout?
                            </p>

                            <div
                                className="flex px-6 gap-4 mx-auto"
                                onClick={() => {
                                    handleSignOut();
                                }}
                            >
                                <button className="cursor-pointer dark:bg-mountbattenpink">
                                    Yes, Logout
                                </button>
                            </div>

                            <p
                                onClick={() => setConfirm(false)}
                                className="text-black dark:text-white underline mx-auto cursor-pointer"
                            >
                                No, stay on App
                            </p>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Logout