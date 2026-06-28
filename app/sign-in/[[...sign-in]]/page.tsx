import { SignIn } from "@clerk/nextjs";
import { Ghost } from "lucide-react";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left panel - Logo and tagline */}
      <div className="w-1/2 flex-col justify-between px-12 py-8 bg-bg-subbase hidden sm:flex">
        <div className="flex items-center space-x-2">
          <Ghost className="h-6 w-6 text-text-primary" />
          <span className="text-lg font-semibold text-text-primary">Ghost AI</span>
        </div>

        <div className="max-w-md">
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            Design systems at the speed of thought.
          </h1>
          <p className="text-text-secondary text-base mb-10">
            Describe your architecture in plain English. Ghost AI maps it to a
            shared canvas your whole team can refine in real time.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-bg-surface rounded-full flex items-center justify-center">
                {/* Replace with actual icon */}
                <div className="w-5 h-5 bg-accent-primary rounded-sm" />
              </div>
              <div>
                <h3 className="text-text-primary font-semibold">AI Architecture Generation</h3>
                <p className="text-text-muted text-sm">Describe your system, AI maps it to nodes and edges on a live canvas.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-bg-surface rounded-full flex items-center justify-center">
                {/* Replace with actual icon */}
                <div className="w-5 h-5 bg-accent-primary rounded-sm" />
              </div>
              <div>
                <h3 className="text-text-primary font-semibold">Real-time Collaboration</h3>
                <p className="text-text-muted text-sm">Live cursors, presence indicators, and shared node editing across your team.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-bg-surface rounded-full flex items-center justify-center">
                {/* Replace with actual icon */}
                <div className="w-5 h-5 bg-accent-primary rounded-sm" />
              </div>
              <div>
                <h3 className="text-text-primary font-semibold">Instant Spec Generation</h3>
                <p className="text-text-muted text-sm">Export a complete Markdown technical spec directly from the canvas graph.</p>
              </div>
            </div>
          </div>
        </div>

        <div />
      </div>

      {/* Right panel - Sign-in form */}
      <div className="w-full sm:w-1/2 flex items-center justify-center bg-bg-elevated p-6">
        <div className="w-full max-w-md">
          <SignIn />
        </div>
      </div>
    </div>
  );
}
