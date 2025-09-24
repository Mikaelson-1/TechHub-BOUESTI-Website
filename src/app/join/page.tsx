"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    PaystackPop?: {
      setup(options: Record<string, any>): { openIframe: () => void };
    };
  }
}

const steps = [
  { id: 1, title: "Basic Info" },
  { id: 2, title: "Verify" },
  { id: 3, title: "Tech Level" },
  { id: 4, title: "Hub Card" },
  { id: 5, title: "Payment" },
  { id: 6, title: "Complete" },
];

const themeOptions = [
  { id: "bluePurple", label: "Blue – Purple", gradient: "from-blue-600 to-purple-600" },
  { id: "greenTeal", label: "Green – Teal", gradient: "from-green-500 to-teal-500" },
  { id: "orangeRed", label: "Orange – Red", gradient: "from-orange-500 to-red-600" },
  { id: "blackGray", label: "Black – Gray", gradient: "from-gray-900 to-gray-700" },
];

const techLevelOptions = [
  { id: "BEGINNER", title: "Beginner", description: "I’m just getting started." },
  { id: "INTERMEDIATE", title: "Intermediate", description: "I’ve built a few projects." },
  { id: "ADVANCED", title: "Advanced", description: "I’m mentoring or shipping products." },
];

const registrationFee = 3000;

const currencyFormatter = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
});

function HubCardPreview({
  fullName,
  matricNumber,
  department,
  techLevel,
  theme,
}: {
  fullName: string;
  matricNumber: string;
  department: string;
  techLevel: string;
  theme: string;
}) {
  const themeClass = themeOptions.find((option) => option.id === theme)?.gradient || themeOptions[0].gradient;

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl shadow-xl text-white bg-gradient-to-br ${themeClass} p-6 min-h-[220px] flex flex-col justify-between`}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-white/80">TechHub BOUESTI</p>
          <h3 className="text-2xl font-semibold mt-2 drop-shadow-sm">{fullName || "Your Name"}</h3>
        </div>
        <div className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
          Pending Approval
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-white/70 uppercase tracking-wide text-[11px]">Matric Number</p>
          <p className="text-base font-semibold mt-1 drop-shadow-sm">{matricNumber || "BTH-000000"}</p>
        </div>
        <div>
          <p className="text-white/70 uppercase tracking-wide text-[11px]">Department</p>
          <p className="text-base font-semibold mt-1 drop-shadow-sm">{department || "Department"}</p>
        </div>
        <div>
          <p className="text-white/70 uppercase tracking-wide text-[11px]">Tech Level</p>
          <p className="text-base font-semibold mt-1 drop-shadow-sm">{techLevel || "Not selected"}</p>
        </div>
        <div>
          <p className="text-white/70 uppercase tracking-wide text-[11px]">Status</p>
          <p className="text-base font-semibold mt-1 drop-shadow-sm">Pending Approval</p>
        </div>
      </div>

      <div className="absolute bottom-5 right-5 w-16 h-16 rounded-xl bg-white/85 text-gray-800 flex items-center justify-center text-xs font-semibold tracking-wide">
        QR CODE
      </div>
    </motion.div>
  );
}

export default function Join() {
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(1);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [matricNumber, setMatricNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [techLevel, setTechLevel] = useState("");
  const [bio, setBio] = useState("");
  const [theme, setTheme] = useState(themeOptions[0].id);
  const [error, setError] = useState<string | null>(null);

  const [paymentStatus, setPaymentStatus] = useState<"idle" | "processing" | "success" | "failed">("idle");
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [transactionReference, setTransactionReference] = useState<string | null>(null);
  const [paystackReady, setPaystackReady] = useState(false);

  const paystackPublicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "";
  const paystackScriptLoadedRef = useRef(false);

  const progress = useMemo(() => ((currentStep - 1) / (steps.length - 1)) * 100, [currentStep]);

  const selectedTechLevelLabel = useMemo(() => {
    return techLevelOptions.find((option) => option.id === techLevel)?.title || techLevel;
  }, [techLevel]);

  useEffect(() => {
    if (currentStep === 5) {
      setPaymentStatus("idle");
      setPaymentError(null);
      if (paystackPublicKey) {
        if (window.PaystackPop) {
          setPaystackReady(true);
        } else if (!paystackScriptLoadedRef.current) {
          const script = document.createElement("script");
          script.src = "https://js.paystack.co/v1/inline.js";
          script.async = true;
          script.onload = () => {
            setPaystackReady(true);
            paystackScriptLoadedRef.current = true;
          };
          script.onerror = () => {
            setPaymentStatus("failed");
            setPaymentError("Unable to load the payment gateway. Please check your connection and try again.");
          };
          document.body.appendChild(script);
        }
      } else {
        setPaystackReady(true);
      }
    }
  }, [currentStep, paystackPublicKey]);

  function goToStep(step: number) {
    setCurrentStep(step);
    setError(null);
  }

  function handleBasicInfoSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!fullName || !email || !matricNumber || !department) {
      setError("Please complete all required fields.");
      return;
    }
    setError(null);
    goToStep(2);
  }

  function handleHubCardSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPaymentStatus("idle");
    setPaymentError(null);
    goToStep(5);
  }

  function startPayment() {
    if (paymentStatus === "processing") return;
    setPaymentError(null);

    if (!email) {
      setPaymentStatus("failed");
      setPaymentError("Email is required for payment. Please go back and provide your email.");
      return;
    }

    // Simulated mode when no Paystack key is present
    if (!paystackPublicKey) {
      setPaymentStatus("processing");
      const simulatedReference = `SIM-${Date.now()}`;
      setTimeout(() => {
        setPaymentStatus("success");
        setTransactionReference(simulatedReference);
        goToStep(6);
      }, 1200);
      return;
    }

    if (!window.PaystackPop) {
      setPaymentStatus("failed");
      setPaymentError("Payment gateway is still loading. Please wait a moment and try again.");
      return;
    }

    setPaymentStatus("processing");
    const reference = `THB-${Date.now()}`;

    try {
      const handler = window.PaystackPop.setup({
        key: paystackPublicKey,
        email,
        amount: registrationFee * 100,
        ref: reference,
        firstname: fullName,
        metadata: {
          custom_fields: [
            { display_name: "Matric Number", variable_name: "matric_number", value: matricNumber },
            { display_name: "Department", variable_name: "department", value: department },
            { display_name: "Tech Level", variable_name: "tech_level", value: selectedTechLevelLabel || "" },
          ],
          bio,
        },
        callback: (response: any) => {
          setPaymentStatus("success");
          setTransactionReference(response?.reference || reference);
          goToStep(6);
        },
        onClose: () => {
          setPaymentStatus("failed");
          setPaymentError("Payment was cancelled. Please try again to complete your registration.");
        },
      });

      handler.openIframe();
    } catch (err) {
      setPaymentStatus("failed");
      setPaymentError("We couldn’t initiate the payment. Please refresh and try again.");
    }
  }

  function renderStepContent() {
    switch (currentStep) {
      case 1:
        return (
          <form onSubmit={handleBasicInfoSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[color:var(--brand-primary)] focus:ring-2 focus:ring-[color:var(--brand-primary)]/20"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[color:var(--brand-primary)] focus:ring-2 focus:ring-[color:var(--brand-primary)]/20"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Matric Number</label>
                <input
                  value={matricNumber}
                  onChange={(event) => setMatricNumber(event.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[color:var(--brand-primary)] focus:ring-2 focus:ring-[color:var(--brand-primary)]/20"
                  placeholder="e.g. BTH/2025/001"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                <input
                  value={department}
                  onChange={(event) => setDepartment(event.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[color:var(--brand-primary)] focus:ring-2 focus:ring-[color:var(--brand-primary)]/20"
                  placeholder="e.g. Computer Science"
                  required
                />
              </div>
            </div>

            {error ? <p className="text-sm text-red-500">{error}</p> : null}

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
              <button
                type="submit"
                className="inline-flex justify-center rounded-xl bg-[color:var(--brand-primary)] px-5 py-3 text-white font-semibold shadow-lg hover:-translate-y-0.5 transition"
              >
                Register
              </button>
              <p className="text-sm text-gray-500">Step 1 of {steps.length}</p>
            </div>
          </form>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-inner">
              <h3 className="text-lg font-semibold text-gray-900">Profile Summary</h3>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <p className="font-medium text-gray-500">Full Name</p>
                  <p className="mt-1 text-gray-900">{fullName}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-500">Email</p>
                  <p className="mt-1 text-gray-900">{email}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-500">Matric Number</p>
                  <p className="mt-1 text-gray-900">{matricNumber}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-500">Department</p>
                  <p className="mt-1 text-gray-900">{department}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-500">Tech Level</p>
                  <p className="mt-1 text-gray-900">{selectedTechLevelLabel || "Not selected yet"}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => goToStep(3)}
                className="inline-flex justify-center rounded-xl bg-[color:var(--brand-primary)] px-5 py-3 text-white font-semibold shadow-lg hover:-translate-y-0.5 transition"
              >
                Confirm & Continue
              </button>
              <button
                onClick={() => goToStep(1)}
                className="inline-flex justify-center rounded-xl border border-gray-200 px-5 py-3 text-gray-700 font-semibold hover:border-[color:var(--brand-primary)] transition"
              >
                Edit Details
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Where are you in your tech journey?</h3>
              <p className="text-sm text-gray-600 mt-2">Pick the option that best describes your experience level.</p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {techLevelOptions.map((option) => {
                const isSelected = techLevel === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setTechLevel(option.id)}
                    className={`w-full text-left rounded-2xl border px-5 py-4 transition shadow-sm ${
                      isSelected
                        ? "border-[color:var(--brand-primary)] bg-[color:var(--brand-primary)]/10"
                        : "border-gray-200 hover:border-[color:var(--brand-primary)]/70"
                    }`}
                  >
                    <h4 className={`text-lg font-semibold ${isSelected ? "text-[color:var(--brand-primary)]" : "text-gray-900"}`}>
                      {option.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                  </button>
                );
              })}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => goToStep(4)}
                disabled={!techLevel}
                className="inline-flex justify-center rounded-xl bg-[color:var(--brand-primary)] px-5 py-3 text-white font-semibold shadow-lg hover:-translate-y-0.5 transition disabled:opacity-60"
              >
                Continue
              </button>
              <button
                onClick={() => goToStep(2)}
                className="inline-flex justify-center rounded-xl border border-gray-200 px-5 py-3 text-gray-700 font-semibold hover:border-[color:var(--brand-primary)] transition"
              >
                Back
              </button>
            </div>
          </div>
        );

      case 4:
        return (
          <form onSubmit={handleHubCardSubmit} className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Hub Card Customization</h3>
              <p className="text-sm text-gray-600 mt-2">Customize your card details and pick a theme. Changes update in real time on the preview.</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Student Name</label>
                <input
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[color:var(--brand-primary)] focus:ring-2 focus:ring-[color:var(--brand-primary)]/20"
                  placeholder="Enter the name to display on the card"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Matric Number</label>
                <input
                  value={matricNumber}
                  onChange={(event) => setMatricNumber(event.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[color:var(--brand-primary)] focus:ring-2 focus:ring-[color:var(--brand-primary)]/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                <input
                  value={department}
                  onChange={(event) => setDepartment(event.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[color:var(--brand-primary)] focus:ring-2 focus:ring-[color:var(--brand-primary)]/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Goals (optional)</label>
                <textarea
                  value={bio}
                  onChange={(event) => setBio(event.target.value)}
                  rows={3}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[color:var(--brand-primary)] focus:ring-2 focus:ring-[color:var(--brand-primary)]/20"
                  placeholder="Share what you hope to build or learn"
                />
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-gray-700">Choose a color theme</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {themeOptions.map((option) => {
                  const isSelected = theme === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setTheme(option.id)}
                      className={`rounded-2xl border px-4 py-3 flex items-center gap-3 transition ${
                        isSelected
                          ? "border-[color:var(--brand-primary)] bg-[color:var(--brand-primary)]/10"
                          : "border-gray-200 hover:border-[color:var(--brand-primary)]/70"
                      }`}
                    >
                      <span className={`h-10 w-10 rounded-xl bg-gradient-to-br ${option.gradient}`} />
                      <span className="text-sm font-semibold text-gray-800">{option.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                className="inline-flex justify-center rounded-xl bg-[color:var(--brand-secondary)] px-5 py-3 text-white font-semibold shadow-lg hover:-translate-y-0.5 transition"
              >
                Apply for Hub Card
              </button>
              <button
                type="button"
                onClick={() => goToStep(3)}
                className="inline-flex justify-center rounded-xl border border-gray-200 px-5 py-3 text-gray-700 font-semibold hover:border-[color:var(--brand-primary)] transition"
              >
                Back
              </button>
            </div>
          </form>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-inner flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Hub Card Fee</h3>
                  <p className="text-sm text-gray-600">One-time payment to produce and activate your TechHub card.</p>
                </div>
                <span className="text-2xl font-bold text-gray-900">{currencyFormatter.format(registrationFee)}</span>
              </div>
            </div>

            {!paystackPublicKey ? (
              <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-800">
                No Paystack public key detected. Payments will run in simulation mode. Set <code>NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY</code> for live transactions.
              </div>
            ) : null}

            <div className="space-y-2 text-sm text-gray-600">
              <p>• You’ll be redirected to Paystack to complete the payment securely.</p>
              <p>• Keep this browser tab open while the transaction processes.</p>
              {paymentStatus === "processing" ? <p className="text-[color:var(--brand-primary)]">Processing payment… Please wait.</p> : null}
            </div>

            {paymentError ? <p className="text-sm text-red-500">{paymentError}</p> : null}

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={startPayment}
                disabled={paymentStatus === "processing" || (Boolean(paystackPublicKey) && !paystackReady)}
                className="inline-flex justify-center rounded-xl bg-[color:var(--brand-primary)] px-5 py-3 text-white font-semibold shadow-lg hover:-translate-y-0.5 transition disabled:opacity-60"
              >
                {paymentStatus === "processing"
                  ? "Processing…"
                  : `Pay ${currencyFormatter.format(registrationFee)} with Paystack`}
              </button>
              <button
                type="button"
                onClick={() => goToStep(4)}
                className="inline-flex justify-center rounded-xl border border-gray-200 px-5 py-3 text-gray-700 font-semibold hover:border-[color:var(--brand-primary)] transition"
              >
                Back
              </button>
            </div>

            {paymentStatus === "failed" ? (
              <button
                type="button"
                onClick={startPayment}
                className="inline-flex justify-center rounded-xl border border-[color:var(--brand-primary)] px-5 py-3 text-[color:var(--brand-primary)] font-semibold hover:bg-[color:var(--brand-primary)]/10 transition"
              >
                Retry Payment
              </button>
            ) : null}

            <p className="text-xs text-gray-500">Powered by Paystack. Your hub card is queued for approval once payment is confirmed.</p>
          </div>
        );

      case 6:
        return (
          <div className="w-full flex flex-col items-center text-center space-y-6">
            <div className="text-4xl">🎉</div>
            <div className="space-y-3 max-w-lg">
              <h2 className="text-2xl font-bold text-gray-900">Congratulations, your registration is complete!</h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Your Hub Card will be approved shortly. You can now explore your dashboard to track courses, events, and community updates.
              </p>
            </div>
            {transactionReference ? (
              <div className="rounded-xl border border-[color:var(--brand-primary)]/20 bg-[color:var(--brand-primary)]/5 px-4 py-2 text-sm text-gray-700">
                Payment reference: <span className="font-semibold text-gray-900">{transactionReference}</span>
              </div>
            ) : null}
            <div className="w-full max-w-sm">
              <HubCardPreview
                fullName={fullName}
                matricNumber={matricNumber}
                department={department}
                techLevel={selectedTechLevelLabel || "Not selected"}
                theme={theme}
              />
            </div>
            <button
              onClick={() => router.push("/dashboard")}
              className="inline-flex justify-center rounded-xl bg-[color:var(--brand-primary)] px-6 py-3 text-white font-semibold shadow-lg hover:-translate-y-0.5 transition"
            >
              Go to Dashboard
            </button>
          </div>
        );

      default:
        return null;
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 pb-16 pt-20">
      <div className="container mx-auto px-4 max-w-6xl space-y-10">
        <div className="rounded-3xl bg-white/70 backdrop-blur shadow-xl p-6 sm:p-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between flex-wrap gap-3">
              {steps.map((step, index) => {
                const isActive = currentStep === step.id;
                const isCompleted = currentStep > step.id;
                return (
                  <div key={step.id} className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition ${
                        isActive || isCompleted
                          ? "border-[color:var(--brand-primary)] bg-[color:var(--brand-primary)] text-white"
                          : "border-gray-300 bg-white text-gray-500"
                      }`}
                    >
                      {step.id}
                    </div>
                    <div className="text-sm font-medium text-gray-600 whitespace-nowrap">{step.title}</div>
                    {index < steps.length - 1 ? (
                      <div
                        className={`hidden sm:block h-px w-16 ${
                          currentStep > step.id ? "bg-[color:var(--brand-primary)]" : "bg-gray-200"
                        }`}
                      />
                    ) : null}
                  </div>
                );
              })}
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[color:var(--brand-primary)] to-[color:var(--brand-secondary)]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        </div>

        <div
          className={`rounded-3xl bg-white shadow-2xl p-6 sm:p-10 transition ${
            currentStep === steps.length ? "grid gap-8" : "grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
          }`}
        >
          <div>{renderStepContent()}</div>

          {currentStep !== steps.length ? (
            <aside className="space-y-6">
              <div className="rounded-2xl bg-[color:var(--brand-primary)]/5 border border-[color:var(--brand-primary)]/15 p-6">
                <h3 className="text-lg font-semibold text-gray-900">Hub Card Preview</h3>
                <p className="text-sm text-gray-600 mt-2">All changes reflect instantly. Choose a theme that matches your vibe.</p>
              </div>
              <HubCardPreview
                fullName={fullName}
                matricNumber={matricNumber}
                department={department}
                techLevel={selectedTechLevelLabel || "Not selected"}
                theme={theme}
              />
              <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5 text-sm text-gray-600 space-y-2">
                <p>• Save your matric and department correctly – they appear on the card.</p>
                <p>• Selecting a theme instantly updates your preview.</p>
                <p>• You can always tweak details before submitting.</p>
              </div>
            </aside>
          ) : null}
        </div>
      </div>
    </main>
  );
}
