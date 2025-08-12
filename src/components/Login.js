// import { useState } from "react";
// import React from "react";
// import { z } from "zod";

// const loginSchema = z.object({
//   email: z.string().email("Invalid email address"),
//   password: z.string().min(6, "Password must be at least 6 characters"),
// });

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState({});

//   const changeHandle = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     const result = loginSchema.safeParse(formData);
//     if (!result.success) {
//       const errorField = result.error.formErrors.fieldErrors;
//       setError(errorField);
//       return;
//     }
//     console.log(formData);
//   };

//   return (
//     <div className="flex items-center justify-center w-full h-[92vh] text-white bg-indigo-100">
//       <form
//         onSubmit={submitHandler}
//         className="flex flex-col gap-6 bg-indigo-500 bg-opacity-80 backdrop-blur-md shadow-md z-50 p-10 rounded-lg text-white w-full max-w-md"
//       >
//         <div>
//           <input
//             value={formData.email}
//             name="email"
//             onChange={changeHandle}
//             className="border border-gray-700 p-2 py-1 rounded-md w-full"
//             type="email"
//             placeholder="Enter Your Email"
//           />
//           {error.email && (
//             <p className="text-red-300 text-sm mt-1">{error.email[0]}</p>
//           )}
//         </div>

//         <div>
//           <input
//             value={formData.password}
//             name="password"
//             onChange={changeHandle}
//             className="border border-gray-700 p-2 py-1 rounded-md w-full"
//             type="password"
//             placeholder="Enter Your Password"
//           />
//           {error.password && (
//             <p className="text-red-300 text-sm mt-1">{error.password[0]}</p>
//           )}
//         </div>

//         <button
//           type="submit"
//           className="bg-black p-2 rounded hover:bg-gray-900 transition duration-300"
//         >
//           LOGIN
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;