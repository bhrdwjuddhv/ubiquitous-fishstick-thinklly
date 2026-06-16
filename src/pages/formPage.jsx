import {TrialForm} from "../components/trialForm.jsx";

export function TrialFormPage() {
    return (

        <div className="min-h-screen bg-[#FDF8E8] flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-lg bg-[#F9F1DC] rounded-2xl shadow-lg border border-[#C8553D]/10 p-8">

                <h1 className="font-logo text-4xl text-[#C8553D] text-center mb-2">
                    Start Your Trial
                </h1>

                <p className="text-[#666666] text-center mb-8">
                    Create your account to continue
                </p>

                <TrialForm />
            </div>
        </div>
    )
}

