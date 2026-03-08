import "@/styles/login.css";

export default function LoginPage() {
  return (
    <main className="flex-1 flex flex-col lg:flex-row h-full min-h-screen">
      {/* Left Side: Branding & Features */}
      <section className="hidden lg:flex lg:w-1/2 bg-[#4338ca] relative overflow-hidden p-16 flex-col justify-between">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <svg height="100%" viewBox="0 0 800 800" width="100%" xmlns="http://www.w3.org/2000/svg">
            <circle cx="400" cy="400" fill="none" r="300" stroke="white" strokeWidth="2"></circle>
            <circle cx="400" cy="400" fill="none" r="200" stroke="white" strokeWidth="1"></circle>
            <rect fill="none" height="400" stroke="white" strokeWidth="1" transform="rotate(45 400 400)" width="400" x="200" y="200"></rect>
          </svg>
        </div>
        {/* Branding Logo */}
        <div className="relative z-10 flex items-center gap-3 text-white">
          <div className="size-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
            <span className="material-symbols-outlined text-white">layers</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight">Stratum EMS</h2>
        </div>
        {/* Content Area */}
        <div className="relative z-10 max-w-xl">
          <h1 className="text-5xl font-extrabold text-white leading-tight mb-6">
            Workforce Intelligence Platform
          </h1>
          <p className="text-primary-foreground/80 text-lg text-indigo-100 mb-12">
            Manage employees and performance with data-driven insights. Experience the future of human capital management.
          </p>
          {/* Feature List */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 glass-effect p-4 rounded-xl">
              <div className="bg-white/20 p-2 rounded-lg">
                <span className="material-symbols-outlined text-white">analytics</span>
              </div>
              <div>
                <h3 className="text-white font-bold">Employee Insights</h3>
                <p className="text-indigo-100/70 text-sm">Deep dive into workforce data and trends.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 glass-effect p-4 rounded-xl">
              <div className="bg-white/20 p-2 rounded-lg">
                <span className="material-symbols-outlined text-white">trending_up</span>
              </div>
              <div>
                <h3 className="text-white font-bold">Performance Tracking</h3>
                <p className="text-indigo-100/70 text-sm">Real-time progress monitoring and goal alignment.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 glass-effect p-4 rounded-xl">
              <div className="bg-white/20 p-2 rounded-lg">
                <span className="material-symbols-outlined text-white">smart_toy</span>
              </div>
              <div>
                <h3 className="text-white font-bold">AI Performance Reviews</h3>
                <p className="text-indigo-100/70 text-sm">Automated, unbiased feedback for growth.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Abstract Illustration Placeholder */}
        <div className="relative z-10 mt-12 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="aspect-video relative flex items-end justify-center px-4">
            <svg className="w-full h-full text-white/20" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
              <rect fill="currentColor" height="120" opacity="0.4" rx="8" width="100" x="20" y="40"></rect>
              <rect fill="currentColor" height="140" opacity="0.6" rx="8" width="100" x="140" y="20"></rect>
              <rect fill="currentColor" height="100" opacity="0.3" rx="8" width="100" x="260" y="60"></rect>
              <path d="M20 120 Q 180 60 380 100" fill="none" opacity="0.5" stroke="white" strokeWidth="2"></path>
            </svg>
          </div>
        </div>
      </section>
      {/* Right Side: Login Form */}
      <section className="flex-1 flex flex-col justify-center items-center p-6 sm:p-12 lg:p-24 bg-transparent">
        <div className="w-full max-w-lg space-y-8 bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] login-card border border-slate-100 dark:border-slate-800">
          {/* Mobile Logo (Hidden on Desktop) */}
          <div className="lg:hidden flex items-center gap-3 mb-8">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-xl">layers</span>
            </div>
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Stratum EMS</h2>
          </div>
          <div className="text-left">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white text-4xl font-black">Welcome back</h2>
            <p className="mt-2 text-slate-500 dark:text-slate-400">Please enter your details to sign in.</p>
          </div>
          {/* Role Selection */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex flex-col items-start p-5 rounded-2xl border-2 border-primary bg-indigo-50/50 dark:bg-primary/10 text-left transition-all hover:shadow-md">
              <span className="material-symbols-outlined text-primary mb-2">admin_panel_settings</span>
              <span className="block font-bold text-slate-900 dark:text-white text-sm">Admin</span>
              <span className="text-[10px] text-slate-500 leading-tight">Manage employees &amp; analytics</span>
            </button>
            <button className="flex flex-col items-start p-5 rounded-2xl border-2 border-slate-100 dark:border-slate-800 text-left transition-all hover:border-primary/30 hover:bg-slate-50 dark:hover:bg-slate-800/50">
              <span className="material-symbols-outlined text-slate-400 mb-2">badge</span>
              <span className="block font-bold text-slate-900 dark:text-white text-sm">Employee</span>
              <span className="text-[10px] text-slate-500 leading-tight">View profile &amp; performance</span>
            </button>
          </div>
          <form className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="email">Email address</label>
                <input autocomplete="email" className="mt-1 block w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-primary focus:border-primary transition-colors border-slate-200 dark:border-slate-700 focus:ring-4 focus:ring-primary/20 transition-all duration-200" id="email" name="email" placeholder="name@company.com" required={true} type="email"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="password">Password</label>
                <div className="relative mt-1">
                  <input autocomplete="current-password" className="block w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-primary focus:border-primary transition-colors border-slate-200 dark:border-slate-700 focus:ring-4 focus:ring-primary/20 transition-all duration-200" id="password" name="password" placeholder="••••••••" required={true} type="password"/>
                  <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-primary" type="button">
                    <span className="material-symbols-outlined text-xl">visibility</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input className="h-4 w-4 text-primary focus:ring-primary border-slate-300 rounded border-slate-200 dark:border-slate-700 focus:ring-4 focus:ring-primary/20 transition-all duration-200" id="remember-me" name="remember-me" type="checkbox"/>
                <label className="ml-2 block text-sm text-slate-700 dark:text-slate-300" htmlFor="remember-me">Remember me</label>
              </div>
              <div className="text-sm">
                <a className="font-medium text-primary hover:underline" href="#">Forgot password?</a>
              </div>
            </div>
            <button className="w-full flex justify-center items-center gap-2 py-4 px-4 rounded-xl shadow-lg shadow-primary/25 text-base font-bold text-white bg-gradient-to-r from-primary to-indigo-700 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-primary/30 transition-all duration-200" type="submit">
              Sign In
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </form>
          <div className="relative my-6">
            <div aria-hidden="true" className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-300 dark:border-slate-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-background-light dark:bg-background-dark text-slate-500 uppercase font-semibold text-xs tracking-widest">OR</span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <button className="w-full inline-flex justify-center items-center py-3 px-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors hover:shadow-sm hover:border-slate-400 dark:hover:border-slate-500 py-3.5 transition-all duration-200">
              <img alt="Google logo" className="h-5 w-5 mr-2" data-alt="Google colorful logo icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUpCukQi6O8u5qXNe35bV7hB-MZkuOocKixLkZwtc0RSqCgZgAsMbAq_kEkF1WGAMkJGZA8FUe_drlDXbmGmO1O-UmFdcB92bRRou-kpu7H86EiPR4pTpBy2bENDvInIHQZ6XcefFTNvc8_2F8yCHoA9IqLhxPbSEUm9gqmi6GbzOpiTMP0aA5gmUwOVdRYMhx0oFGJAegsPusM7tvXDe8p_v77rF0OocJ5LCgWEOwg7bdqPMb-Passy-L4DR3KBW9_413dAS9pg"/>
              Continue with Google
            </button>
            <button className="w-full inline-flex justify-center items-center py-3 px-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors hover:shadow-sm hover:border-slate-400 dark:hover:border-slate-500 py-3.5 transition-all duration-200">
              <img alt="Microsoft logo" className="h-5 w-5 mr-2" data-alt="Microsoft windows corporate logo icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBItHPRaIuwC4dykNmFpkDCtvSkn8t2WKMl1EtoVuMc3VJmeotSxvbnyMarqpuoS9AU2ycZaysWkF9D5E0_DkjTLTZNeS47ldXbZjdX5EVNcxGTs82rVgtWBefWvhtyYAmw6x2luwdN65d_AA0csDBSenbKmVN6H5piiQXiouLp38cSxvwg5fkew6EoXgwuf5nnPHVpNSc5UDJHi7J7y4MJ2O9uKZv7eH1KPw4tC0w0xiqfkNogWrOd6ZAOGcJIH5B2E6iJu7mZ4w"/>
              Continue with Microsoft
            </button>
          </div>
          {/* Security Badge */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <span className="material-symbols-outlined text-slate-400 text-base">lock</span>
            <p className="text-xs text-slate-500 dark:text-slate-400">Your data is securely encrypted</p>
          </div>
          {/* Footer */}
          <div className="pt-8 text-center space-y-4">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Need access? <a className="text-primary font-medium hover:underline" href="#">Contact your HR administrator</a>
            </p>
            <div className="flex justify-center gap-6 text-xs text-slate-500 dark:text-slate-400">
              <a className="hover:text-primary transition-colors hover:underline underline-offset-4" href="#">Help Center</a>
              <a className="hover:text-primary transition-colors hover:underline underline-offset-4" href="#">Privacy</a>
              <a className="hover:text-primary transition-colors hover:underline underline-offset-4" href="#">Terms</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
