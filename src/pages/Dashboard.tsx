// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import {
//   Calendar,
//   Users,
//   ShoppingBag,
//   MessageCircle,
//   Phone,
//   Globe,
//   LogOut,
// } from 'lucide-react';
// import toast from 'react-hot-toast';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Flame, Home, BookOpen } from 'lucide-react';

// const menuItems = [
//   {
//     icon: Calendar,
//     label: 'Book Muhurtam',
//     color: 'bg-purple-100 text-purple-600',
//     path: 'https://bookmuhurtam.netlify.app/',
//   },
//   {
//     icon: MessageCircle,
//     label: 'Our Services',
//     color: 'bg-yellow-100 text-yellow-600',
//     path: 'https://upadrastaharshavardhan.github.io/rutvikservices/',
//   },
//   {
//     icon: Users,
//     label: 'Find Rutviks',
//     color: 'bg-blue-100 text-blue-600',
//     path: 'https://sites.google.com/view/rutviks/home',
//   },
//   {
//     icon: Globe,
//     label: 'NRI Service',
//     color: 'bg-red-100 text-red-600',
//     path: 'https://rutviknriservices.netlify.app',
//   },
//   {
//     icon: ShoppingBag,
//     label: 'Pooja Samagri',
//     color: 'bg-green-100 text-green-600',
//     path: '/pooja-samagri',
//   },
//   {
//     icon: Phone,
//     label: 'Contact',
//     color: 'bg-gray-100 text-gray-600',
//     path: 'https://sites.google.com/view/contact-rutvik',
//   },
// ];

// const services = [
//   {
//     icon: Flame,
//     title: 'Homams',
//     description: 'Sacred fire ceremonies including Ganapathi Homam, Chandi Homam, and more.',
//   },
//   {
//     icon: Home,
//     title: 'Muhurtams',
//     description: 'Auspicious timing for weddings, housewarmings, and naming ceremonies.',
//   },
//   {
//     icon: Users,
//     title: 'Consultations',
//     description: 'Expert guidance for dosha remedies and spiritual matters.',
//   },
//   {
//     icon: BookOpen,
//     title: 'Vedic Classes',
//     description: 'Learn ancient wisdom and spiritual practices from experienced teachers.',
//   },
// ];

// export default function Dashboard() {
//   const { currentUser, logout } = useAuth();
//   const navigate = useNavigate();
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const handleLogout = async () => {
//     try {
//       await logout();
//       toast.success('Successfully logged out!');
//       navigate('/login');
//     } catch (error) {
//       toast.error('Failed to logout.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
//       {/* Navbar */}
//       <nav className="bg-white shadow-lg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex items-center">
//               <h1 className="text-2xl font-bold text-orange-600">Rutvik Platform</h1>
//             </div>
//             <div className="flex items-center">
//               <span className="text-gray-700 mr-4">Welcome, {currentUser?.email}</span>
//               <button
//                 onClick={handleLogout}
//                 className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
//               >
//                 <LogOut className="h-4 w-4 mr-2" />
//                 Logout
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Menu Section */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
//           {menuItems.map((item, index) => (
//             <motion.button
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="flex items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
//               onClick={() => (window.location.href = item.path)}
//             >
//               <div className={`p-3 rounded-full ${item.color} mr-4`}>
//                 <item.icon className="h-6 w-6" />
//               </div>
//               <div className="flex flex-col items-start">
//                 <span className="text-lg font-semibold text-gray-900">{item.label}</span>
//                 <span className="text-sm text-gray-500">Click to explore</span>
//               </div>
//             </motion.button>
//           ))}
//         </div>

//         {/* Services Section */}
//         <section className="py-16 bg-gradient-to-b from-orange-50 to-white" ref={ref}>
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Our Services</h2>
//               <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//                 Discover our comprehensive range of traditional services performed by experienced Rutviks.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {services.map((service, index) => (
//                 <motion.div
//                   key={service.title}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={inView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
//                 >
//                   <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
//                     <service.icon className="w-6 h-6 text-orange-600" />
//                   </div>
//                   <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
//                   <p className="text-gray-600">{service.description}</p>
//                   <button className="mt-4 text-orange-600 font-semibold hover:text-orange-700 transition-colors">
//                     Learn More →
//                   </button>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }



import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Calendar,
  Users,
  ShoppingBag,
  MessageCircle,
  Phone,
  Globe,
  LogOut,
} from 'lucide-react';
import toast from 'react-hot-toast';

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Successfully logged out!');
      navigate('/login');
    } catch (error) {
      toast.error('Failed to logout.');
    }
  };

  const menuItems = [
    {
      icon: Calendar,
      label: 'Book Muhurtam',
      color: 'bg-purple-100 text-purple-600',
      path: 'https://bookmuhurtam.netlify.app/'
    },
    { icon: MessageCircle, label: 'Our services', color: 'bg-yellow-100 text-yellow-600', path: 'https://upadrastaharshavardhan.github.io/rutvikservices/' },
    { icon: Users, label: 'Find Rutviks', color: 'bg-blue-100 text-blue-600', path: 'https://sites.google.com/view/rutviks/home' },
    { icon: Globe, label: 'NRI service', color: 'bg-red-100 text-red-600', path: 'https://rutviknriservices.netlify.app' },
    { icon: ShoppingBag, label: 'Pooja Samagri', color: 'bg-green-100 text-green-600', path: '/pooja-samagri' },
    { icon: Phone, label: 'Contact', color: 'bg-gray-100 text-gray-600', path: 'https://sites.google.com/view/contact-rutvik' },
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-orange-600">Rutvik Platform</h1>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 mr-4">Welcome, {currentUser?.email}</span>
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="flex items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              onClick={() => window.location.href = item.path}
            >
              <div className={`p-3 rounded-full ${item.color} mr-4`}>
                <item.icon className="h-6 w-6" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-lg font-semibold text-gray-900">{item.label}</span>
                <span className="text-sm text-gray-500">Click to explore</span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <p className="text-gray-600">No recent activities to display.</p>
        </div>
      </main>
    </div>
  );
}
