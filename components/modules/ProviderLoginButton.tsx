/*
Author: chankruze (chankruze@geekofia.in)
Created: Mon Nov 22 2021 22:01:26 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

import { Provider } from "next-auth/providers";
import { signIn } from "next-auth/react";

interface Props {
    provider?: Provider;
    bgColor?: string;
}

const ProviderLoginButton: React.FC<Props> = ({
    provider,
    bgColor = "bg-blue-600",
}) => {
    if (!provider) return null;
    
    return (
        <button
            className={`w-full py-3 px-4 
    text-white capitalize 
    ${bgColor} rounded`}
            onClick={() => signIn(provider.id)}
        >
            Sign in with {provider.name}
        </button>
    );
};

export default ProviderLoginButton;
