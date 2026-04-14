import { motion } from 'motion/react';
import { ShieldAlert, ShieldCheck, AlertTriangle, Activity, Lock, User, Clock, Bell } from 'lucide-react';

export default function Dashboard() {
  // Mock Data from requirements
  const userData = {
    name: "Aditya Kumar",
    email: "aditya@gmail.com",
    securityScore: 78,
    lastLogin: "2026-04-08",
    alerts: [
      "Weak password detected",
      "Suspicious login attempt"
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Security Dashboard</h1>
          <p className="text-gray-400">Welcome back, {userData.name}</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500 font-mono">
          <Clock className="h-4 w-4" />
          Last login: {userData.lastLogin}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Stats Column */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Security Score Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel rounded-xl p-8 border-l-4 border-l-[var(--color-cyber-accent)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Activity className="h-32 w-32 text-[var(--color-cyber-accent)]" />
            </div>
            
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-wider text-sm">Overall Security Score</h2>
            
            <div className="flex items-center gap-8">
              <div className="relative w-32 h-32 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="var(--color-cyber-border)" strokeWidth="10" />
                  <circle 
                    cx="50" cy="50" r="45" fill="none" 
                    stroke="var(--color-cyber-accent)" 
                    strokeWidth="10" 
                    strokeDasharray={`${userData.securityScore * 2.827} 282.7`} 
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute text-3xl font-mono font-bold text-white">
                  {userData.securityScore}%
                </div>
              </div>
              
              <div className="space-y-4 flex-1">
                <div className="flex justify-between items-center p-3 bg-[var(--color-cyber-bg)] rounded border border-[var(--color-cyber-border)]">
                  <span className="text-gray-400 text-sm">Risk Level</span>
                  <span className="text-yellow-500 font-bold flex items-center gap-2">
                    Medium <AlertTriangle className="h-4 w-4" />
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-[var(--color-cyber-bg)] rounded border border-[var(--color-cyber-border)]">
                  <span className="text-gray-400 text-sm">Password Strength</span>
                  <span className="text-red-500 font-bold flex items-center gap-2">
                    Weak <ShieldAlert className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Recommended Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 border border-red-900/50 bg-red-950/20 rounded-xl"
          >
            <h3 className="text-red-400 font-bold mb-2 flex items-center gap-2 uppercase text-sm tracking-wider">
              <AlertTriangle className="h-5 w-5" />
              Recommended Action
            </h3>
            <p className="text-white text-lg">👉 Change your password immediately</p>
            <button className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded font-medium transition-colors">
              Update Password Now
            </button>
          </motion.div>

        </div>

        {/* Sidebar Column */}
        <div className="space-y-8">
          
          {/* User Profile */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-panel rounded-xl p-6"
          >
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm flex items-center gap-2">
              <User className="h-4 w-4 text-[var(--color-cyber-accent)]" />
              Profile Details
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-500 uppercase tracking-wider">Name</label>
                <div className="text-white font-medium">{userData.name}</div>
              </div>
              <div>
                <label className="text-xs text-gray-500 uppercase tracking-wider">Email</label>
                <div className="text-white font-medium">{userData.email}</div>
              </div>
              <div>
                <label className="text-xs text-gray-500 uppercase tracking-wider">Status</label>
                <div className="text-[var(--color-cyber-accent)] font-medium flex items-center gap-1">
                  <ShieldCheck className="h-4 w-4" /> Active
                </div>
              </div>
            </div>
          </motion.div>

          {/* Active Alerts */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-panel rounded-xl p-6"
          >
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm flex items-center gap-2">
              <Bell className="h-4 w-4 text-yellow-500" />
              Active Alerts
            </h3>
            <div className="space-y-3">
              {userData.alerts.map((alert, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-[var(--color-cyber-bg)] border border-[var(--color-cyber-border)] rounded">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{alert}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
