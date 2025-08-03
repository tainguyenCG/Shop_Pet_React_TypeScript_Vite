import { Link } from "react-router-dom";
import NotFoundImage from "/404.svg";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
      <div className="bg-gray-100 p-6 sm:p-8 rounded-2xl text-center max-w-xl w-full animate-fade-up">
        <img
          src={NotFoundImage}
          alt="404 Not Found"
          className="w-full max-w-md mx-auto  animate-float"
        />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-gray-500 text-base sm:text-lg mb-8 leading-relaxed">
          Oops! Page not found
        </p>
        <Link to="/">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 text-lg rounded-lg">
            ← Trang chủ
          </button>
        </Link>
      </div>
    </div>
  );
};

// // CSS for animations
// const styles = `
//   @keyframes fade-up {
//     from {
//       opacity: 0;
//       transform: translateY(30px);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }

//   @keyframes float {
//     0%, 100% {
//       transform: translateY(0);
//     }
//     50% {
//       transform: translateY(-8px);
//     }
//   }

//   .animate-fade-up {
//     animation: fade-up 0.5s ease-out;
//   }

//   .animate-float {
//     animation: float 3s ease-in-out infinite;
//   }
// `;

export default NotFound;
