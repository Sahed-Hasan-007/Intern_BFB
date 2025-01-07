<template>

    <!-- Section 1 -->
    <div class="bg-white max-w-screen-lg mx-auto text-center py-10 px-4">
        <header>
            <img src="assets/logo1.png" alt="h_img" class="h-20 mx-auto">
        </header>

        <div class="mt-10">
            <h1 class="text-green-800 text-3xl md:text-5xl font-bold px-5">
                স্বাস্থ্য, ফিটনেস এবং প্রযুক্তি সবকিছু একসাথে!<br> "আপনার স্টাইল, আপনার স্মার্টওয়াচ"
            </h1>
            <h2 class="bg-yellow-300 inline-block font-bold text-lg md:text-2xl font-medium mt-10 px-10 py-2">
                আপনার জীবনকে আরও স্মার্ট করুন
            </h2>
        </div>

        <div class="relative mt-10">
            <img src="assets/main1.png" alt="main_img" class="w-3/4 mx-auto">
            <div class="absolute inset-0 flex items-center justify-center">
                <a href="https://www.geeksforgeeks.org/html-tutorial/" class="text-center">
                    <button class="bg-white bg-opacity-80 rounded-full w-24 h-24 flex items-center justify-center hover:bg-red-600 transition-all duration-300">
                        <span class="text-red-600 hover:text-white text-4xl font-bold">▶</span>
                    </button>
                </a>
            </div>
        </div>

        <div class="mt-10">
            <button class="bg-green-800 text-customYellow text-lg md:text-xl font-bold py-3 px-6 rounded-full flex items-center mx-auto hover:bg-yellow-500 hover:text-black transition-all">
                <span>অর্ডার করতে ক্লিক করুন</span>
                <img src="assets/clic2.png" alt="clic_icon" class="h-6 w-6 ml-2">
            </button>
        </div>
    </div>





    <!-- Section 2 -->
    <div class="bg-yellow-100 px-8 py-10">
        <!-- Header Section -->
        <header>
            <h1 class="text-4xl text-green-800 font-bold mb-8 text-center md:text-left md:ml-20">
                স্মার্টওয়াচের একাধিক ফিচার <br> এক নজরে
            </h1>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 md:px-20">

            <div class="border-4 group border-green-800 p-6 rounded-tr-3xl rounded-bl-3xl transition-all duration-500 hover:bg-green-800">
                <h2 class="text-green-800  font-bold text-xl mb-4 transition-all duration-500 group-hover:text-customYellow">
                    স্বাস্থ্য পর্যবেক্ষণের সুবিধা
                </h2>
                <p class="text-gray-800 transition-all duration-500 hover:text-white group-hover:text-white">
                    হার্ট রেট মনিটর: নিয়মিত আপনার হার্টের অবস্থার নজর রাখুন।<br>
                    রক্তের অক্সিজেন পর্যবেক্ষক: SpO2<br>
                    ট্র্যাকিং দিয়ে স্বাস্থ্য সম্পর্কে সচেতন থাকুন।<br>
                    বিশ্ব ক্লাসিক: শরীর ও ঘামের তথ্য বিশ্লেষণ প্রক্রিয়া সঠিক নির্দেশনা।
                </p>
            </div>

            <div class="border-4 group border-green-800 p-6 rounded-tr-3xl rounded-bl-3xl transition-all duration-500 hover:bg-green-800">
                <h2 class="text-green-800 font-bold text-xl mb-4 transition-all duration-500 group-hover:text-customYellow">
                    স্বাস্থ্য পর্যবেক্ষণের সুবিধা
                </h2>
                <p class="text-gray-800 transition-all duration-500 group-hover:text-white">
                    হার্ট রেট মনিটর: নিয়মিত আপনার হার্টের অবস্থার নজর রাখুন।<br>
                    রক্তের অক্সিজেন পর্যবেক্ষক: SpO2<br>
                    ট্র্যাকিং দিয়ে স্বাস্থ্য সম্পর্কে সচেতন থাকুন।<br>
                    বিশ্ব ক্লাসিক: শরীর ও ঘামের তথ্য বিশ্লেষণ প্রক্রিয়া সঠিক নির্দেশনা।
                </p>
            </div>

            <div class="border-4 group border-green-800 p-6 rounded-tr-3xl rounded-bl-3xl transition-all duration-500 hover:bg-green-800">
                <h2 class="text-green-800 font-bold text-xl mb-4 transition-all duration-500 group-hover:text-customYellow">
                    ফিটনেস ট্র্যাকিং
                </h2>
                <p class="text-gray-800 transition-all duration-500 group-hover:text-white">
                    স্পোর্টস মোড: বিভিন্ন ধরনের স্পোর্টস অ্যাক্টিভিটির জন্য ৩০+ মোড।<br>
                    ক্যালোরি বার্ন কাউন্টিং: আপনার ব্যায়ামের সময় ক্যালোরি ক্ষত নির্ধারণ করুন।<br>
                    স্টেপ ট্র্যাকিং: প্রতিদিনের পদক্ষেপের বিবরণ দেখুন।
                </p>
            </div>

            <div class="border-4 group border-green-800 p-6 rounded-tr-3xl rounded-bl-3xl transition-all duration-500 hover:bg-green-800">
                <h2 class="text-green-800 font-bold text-xl mb-4 transition-all duration-500 group-hover:text-customYellow">
                    স্মার্ট নোটিফিকেশন
                </h2>
                <p class="text-gray-800 transition-all duration-500 group-hover:text-white">
                    কল, মেসেজ, এবং অ্যাপ নোটিফিকেশন সরাসরি আপনার হাতে। গুরুত্বপূর্ণ আপডেট কখনোই মিস করবেন না।
                </p>
            </div>

            <div class="border-4 group border-green-800 p-6 rounded-tr-3xl rounded-bl-3xl transition-all duration-500 hover:bg-green-800">
                <h2 class="text-green-800 font-bold text-xl mb-4 transition-all duration-500 group-hover:text-customYellow">
                    দীর্ঘস্থায়ী ব্যাটারি লাইফ
                </h2>
                <p class="text-gray-800 transition-all duration-500 group-hover:text-white">
                    একবারের চার্জে ৭+ দিন থাকার সুবিধা। দ্রুত চার্জিং ফিচার অন্তর্ভুক্ত।
                </p>
            </div>

            <div class="border-4 group border-green-800 p-6 rounded-tr-3xl rounded-bl-3xl transition-all duration-500 hover:bg-green-800">
                <h2 class="text-green-800 font-bold text-xl mb-4 transition-all duration-500 group-hover:text-customYellow">
                    মিউজিক এবং ক্যামেরা নিয়ন্ত্রণ
                </h2>
                <p class="text-gray-800 transition-all duration-500 group-hover:text-white">
                    মিউজিক চালানো বা ক্যামেরা ক্লিক করা আপনার স্মার্টওয়াচ থেকে সহজ এবং সুবিধাজনক ব্যবহারের সুযোগ।
                </p>
            </div>

        </div>

        <div class="text-center mt-10">
            <button class="bg-green-800 text-customYellow text-lg md:text-xl font-bold py-3 px-6 rounded-full flex items-center mx-auto hover:bg-yellow-500 hover:text-black transition-all">
                <span>অর্ডার করতে ক্লিক করুন</span>
                <img src="assets/clic2.png" alt="clic_icon" class="h-6 w-6 ml-2">
            </button>
        </div>
    </div>


    <!-- Section 3 -->
    <div class="bg-white text-center py-8">
        <!-- Header Section -->
        <header>
            <h1 class="text-4xl font-bold text-gray-800">আমাদের পণ্য নিয়ে গ্রাহকদের অভিজ্ঞতা</h1>
        </header>

        <!-- Features Grid Section -->
        <div class="flex justify-center flex-wrap  gap-5 mt-16 px-8 md:px-24">

            <div class="flex flex-col gap-5 items-center">
                <!-- Card 1 -->
                <div class="bg-green-900 text-white p-6 rounded-lg w-80 mx-auto hover:shadow-lg hover:shadow-black">
                    <h2 class="text-xl font-bold text-left mb-4">সন্তুষ্ট গ্রাহক</h2>
                    <p class="text-4xl font-bold text-lime-400 text-right mb-4">৩,০০০+</p>
                    <p class="text-sm text-gray-300 border-t border-white pt-2 text-center">
                        সন্তুষ্ট গ্রাহকরা আমাদের পণ্যের প্রতি বিশ্বাস রেখেছেন।
                    </p>
                </div>

                <!-- Card 2 -->
                <div class="bg-green-900 text-white p-6 rounded-lg w-80 mx-auto hover:shadow-lg hover:shadow-black">
                    <h2 class="text-xl font-bold text-left mb-4">পুনঃক্রয়কারী</h2>
                    <p class="text-4xl font-bold text-lime-400 text-right mb-4">৪০০+</p>
                    <p class="text-sm text-gray-300 border-t border-white pt-2 text-center">
                        পুনঃক্রয় করে আমাদের গুণমান নিশ্চিত করে।
                    </p>
                </div>
            </div>

            <div class="flex flex-col gap-5 items-center">
                <!-- Card 3 -->
                <div class="bg-green-900 text-white p-6 rounded-lg w-80 mx-auto hover:shadow-lg hover:shadow-black">
                    <h2 class="text-xl font-bold text-left mb-4">পণ্য বিক্রি</h2>
                    <p class="text-4xl font-bold text-lime-400 text-right mb-4">৫০০০+</p>
                    <p class="text-sm text-gray-300 border-t border-white pt-2 text-center">
                        ৫০০০ পণ্যের বিক্রি আমাদের জনপ্রিয়তা প্রমাণ করে।
                    </p>
                </div>

                <!-- Card 4 -->
                <div class="bg-green-900 text-white p-6 rounded-lg w-80 mx-auto hover:shadow-lg hover:shadow-black">
                    <h2 class="text-xl font-bold text-left mb-4">গ্রাহক সন্তুষ্ট</h2>
                    <p class="text-4xl font-bold text-lime-400 text-right mb-4">৯৫%</p>
                    <p class="text-sm text-gray-300 border-t border-white pt-2 text-center">
                        ৯৫% গ্রাহক আমাদের সেবা ও <br> পণ্যে সন্তুষ্ট।
                    </p>
                </div>
            </div>
        </div>

        <div class="text-center mt-10">
            <button class="bg-customYellow text-green-800 text-lg font-bold py-3 px-8 rounded-full flex items-center mx-auto hover:bg-yellow-500 hover:text-black transition-all">
                <span>অর্ডার করতে ক্লিক করুন</span>
                <img src="assets/clic1.png" alt="clic_icon" class="w-6 h-6 ml-2">
            </button>
        </div>
    </div>



    <!-- Section 4 -->
    <div class="bg-green-900 py-5">

        <div class=" flex flex-col justify-evenly items-center bg-green-900 h-70 md:flex-row md:h-32 gap-5">

            <div class="text-white text-2xl md:text-3xl mx-5 ">
                &#9742; +880 1733586288
            </div>

            <div class="mx-5">
                <img src="assets/logo2.png" alt="h_img" class="h-12 w-auto md:h-16 w-auto">
            </div>

 
            <div class="mx-5">
                <img src="assets/fa_ut_icon.png" alt="h_img" class="h-12 w-auto md:h-16 w-auto">
            </div>
        </div>

        
        <div class="bg-black text-white text-center h-16 flex items-center justify-center mt-10 md:mt-1">
            <h6 class="text-sm">
                "© 2024 All Rights Reserved by BDFunnelBuilder. Unauthorized use prohibited."
            </h6>
        </div>

    </div>



</template>
