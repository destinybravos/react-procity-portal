import { BiInfoCircle } from "react-icons/bi";
import { ImWarning } from "react-icons/im";
import { FaCircleCheck } from "react-icons/fa6";
import { FaTimesCircle } from "react-icons/fa";
import { useState } from "react";

const Alert = ({size = 'md', message = "alert", title = "", type = "success", show = false, onClose}) => {

    const displayIcon = () => {
        if(type === "info"){
            return (<BiInfoCircle className="text-blue-500 h-10 w-10" />);
        }else if(type === "warning"){
            return (<ImWarning className="text-amber-500 h-10 w-10" />);
        }else if(type === "success"){
            return (<FaCircleCheck className="text-green-500 h-10 w-10" />);
        }else if(type === "error"){
            return (<FaTimesCircle className="text-red-500 h-10 w-10" />);
        }else{
            return (<BiInfoCircle className="text-slate-500 h-10 w-10" />);
        }
        
    };
    return (
        <div onClick={ () => onClose() } className={`fixed h-screen w-full bg-black bg-opacity-50 top-0 left-0 ${ show == false && 'hidden' }`}>
            <section className="h-full w-full flex items-center justify-center">
                <div className={`bg-white text-slate-800 py-3 px-4 rounded-md w-full max-w-${size}`}>
                    {/* Alert Icon */}
                    <div className="flex justify-center">
                        { displayIcon() }
                    </div>

                    {/* Alert Message */}
                    <div className="text-center">
                        <h2 className="font-bold text-lg">
                            { title }
                        </h2>
                        <p>
                            { message }
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Alert