'use client'

import { useFormState } from "react-dom";
import AuthButton from "../../_components/AuthButton";
import { useSearchParams } from "next/navigation";
import { resendVerificationEmail } from "@/actions/auth";

export default function ResetForm() {
    const searchParams = useSearchParams()

    const email = searchParams.get('email')
    const verificationSent = Boolean(searchParams.get('verification_sent'))

    const [formState, action] = useFormState(resendVerificationEmail.bind(null, email!), undefined);

    return (
        <>
            {!!formState && (
                <div className="text-blue-500 mb-4">{formState}</div>
            )}
            {!!verificationSent && (
                <div className="text-green-500 mb-4">A verification link has been sent to your email.</div>
            )}
            <div>
                <form action={action}>
                    <AuthButton label="Resend Verification Email" />
                </form>
            </div>
        </>
    )
}