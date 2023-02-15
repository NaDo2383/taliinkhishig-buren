
import { Alert, Pagination } from "antd";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getAllNews } from "../api/news";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Heading from "../components/Heading";
import NewsCard from "../components/NewsCard";
import SkeletonCard from "../components/SkeletonCard";
import catchResponseErr from "../utils/catchResponseErr";

export default function ApplyForm() {
    const [page, setPage] = useState(1);
    const { data, isLoading, error } = useQuery(["all-news", page], () =>
        getAllNews(page)
    );

    const allNews = data?.data;
    const pagination = data?.pagination;
    useEffect(() => {
        // 👇️ scroll to top on
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [page]);
    console.log(data?.pagination?.total);
    return (
        <div>
            <div className="relative mt-[-600px] md:mt-[-120px]">
                <Container>
                <div className="p-8 bg-white rounded-xl mb-10">

                <span className="text-2xl border-b bottom-3  border-[#FE7300] p-2">Анкет бөглөх</span>
                    <div className="flex justify-center mb-10">
                        <form className="flex w-full gap-3 py-10">
                            <div className="flex w-1/2 flex-col">
                                <div class="mb-6">
                                    <label for="Lastname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">LastName</label>
                                    <input type="text" id="Lastname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"required />
                                </div>
                                <div class="mb-6">
                                    <label for="firstname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Firstname</label>
                                    <input type="text" id="firstname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div class="mb-6">
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                                </div>
                                <div class="mb-6">
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div>
                                    <button class="bg-[#FE7300] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>

                                </div>
                            </div>
                            <div className="flex w-1/2 flex-col">
                                <div class="mb-6">
                                    <label for="ovog" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">family name</label>
                                    <input type="text" id="ovog" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div class="mb-6">
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gen</label>
                                    <select className="p-2">
                                        <option value='0'>Хүйс сонгох</option>
                                        <option value='1'>male</option>
                                        <option value='2'>female</option>
                                    </select>
                                </div>
                                <div class="mb-6">
                                    <label for="Address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your address</label>
                                    <input type="text" id="Address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Дүүрэг Сум/хороо/хотхон/тоот" required />
                                </div>
                                <div class="mb-6">
                                    <label for="numberPhone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                                    <input type="number" id="numberPhone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                
                </Container>
            </div>
        </div>
    );
}