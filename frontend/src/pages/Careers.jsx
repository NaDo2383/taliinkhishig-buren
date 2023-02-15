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

import { useNavigate } from "react-router-dom";

export default function Careers() {
    const navigate = useNavigate();
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
                    <Heading
                        title={"Careers"}
                        subTitle="Нээлттэй ажлын байрнууд"
                        img={
                            "https://www.paythrough.in/assets/images/career-img.jpg"
                        }
                    />
                    <span className="text-2xl border-b bottom-3 p-1 border-[#FE7300] p-2">
                        Нээлттэй ажлын байрнууд
                    </span>
                    <div className="lg:max-w-[700px] xl:max-w-full mx-auto grid sm:grid-cols-2  gap-5 pt-10">
                        <div
                            className="w-full flex mb-5 rounded-xl"
                            onClick={() => navigate("/apply")}
                            style={{
                                background: "rgba(96,97,107,0.2)",
                                boxShadow: "4px 5px 10px",
                            }}
                        >
                            <div className="w-1/2 overflow-hidden h-full ">
                                <img
                                    src="http://taliinkhishig.mn/images/105.jpg?fbclid=IwAR2dVn2-DnbW_Wvsus6a6VIAlSfAYDBo3lalP2yfGAfIAJNcB6jvYf0n0U4"
                                    className="hover:scale-105 transition duration-1000 h-full object-cover w-[95%]"
                                    alt=""
                                />
                            </div>
                            <div className="  w-1/2  text-[13px] mt-2 mb-1 text-gray flex flex-col gap-y-3">
                                <span className="color-[#6B6D71] text-sm">
                                    Нээлттэй ажлын байр
                                </span>
                                <h2 className="text-2xl font-medium border-l-4 border-[#FE7300] p-2">
                                    ТЕХНИКИЙН ГЕОЛОГИ
                                </h2>
                                <p className="text-lg p-3">
                                    Уурхайн нүүрс олборлолтод хяналт тавих,
                                    дээжлэлт хийх, бүртгэл хөтлөх, нүүрсний ул
                                    таазны хэмжилт хийх
                                </p>
                            </div>
                        </div>
                        <div
                            className="w-full flex mb-5 rounded-xl "
                            onClick={() => navigate("/apply")}
                            style={{
                                background: "rgba(96,97,107,0.2)",
                                boxShadow: "4px 5px 10px",
                            }}
                        >
                            <div className="w-1/2 overflow-hidden h-full ">
                                <img
                                    src="http://taliinkhishig.mn/images/104.jpg?fbclid=IwAR1p7lozDrQcoInk8g6xZJ3ZpP2wOpEqJfPolNi8v3gKmcgkO0W1j7-h5aQ"
                                    className="hover:scale-105 transition duration-1000 h-full object-cover w-[95%]"
                                />
                            </div>
                            <div className=" w-1/2 text-[13px] mt-2 mb-1 text-gray flex flex-col gap-y-3">
                                <span className="color-[#6B6D71] text-sm">
                                    Нээлттэй ажлын байр
                                </span>
                                <h2 className="text-2xl font-medium border-l-4 border-[#FE7300] p-2">
                                    Засварын Механик
                                </h2>
                                <p className="text-lg p-3">
                                    Механик хүнд механизм засвар үйлчилгээ
                                </p>
                            </div>
                        </div>
                        <div
                            className="w-full flex mb-5 rounded-xl"
                            onClick={() => navigate("/apply")}
                            style={{
                                background: "rgba(96,97,107,0.2)",
                                boxShadow: "4px 5px 10px",
                            }}
                        >
                            <div className="w-1/2 overflow-hidden h-full ">
                                <img
                                    src="http://taliinkhishig.mn/images/100.jpg?fbclid=IwAR0AzDs9dhpNJi5wANllBMtmaF559ofb9yjuMUT2Q-wwB_3k2gPO8x-KwME"
                                    className="hover:scale-105 transition duration-1000 h-full object-cover w-[95%]"
                                />
                            </div>
                            <div className="  w-1/2  text-[13px] mt-2 mb-1 text-gray flex flex-col gap-y-3">
                                <span className="color-[#6B6D71] text-sm">
                                    Нээлттэй ажлын байр
                                </span>
                                <h2 className="text-2xl font-medium border-l-4 border-[#FE7300] p-2">
                                    ДЭЭЖ БЭЛТГЭГЧ
                                </h2>
                                <p className="text-lg p-3">
                                    Нүүрсний дээжинд шинжилгээ хийхэд бэлэн
                                    болгож бэлтгэх, Ирсэн дээжинд бүртгэл хөтлөж
                                    тэмдэглэгээ хийх
                                </p>
                            </div>
                        </div>
                        <div
                            className="w-full flex mb-5 rounded-xl"
                            onClick={() => navigate("/apply")}
                            style={{
                                background: "rgba(96,97,107,0.2)",
                                boxShadow: "4px 5px 10px",
                            }}
                        >
                            <div className="w-1/2 overflow-hidden h-full ">
                                <img
                                    src="http://taliinkhishig.mn/images/101.jpg?fbclid=IwAR1PJUPI08r3ZkcB5g9JHO-sCT4gMcJvWeT8F-_l2dmtGIk89HYjH8QzuXc"
                                    className="hover:scale-105 transition duration-1000 h-full object-cover w-[95%]"
                                />
                            </div>
                            <div className=" w-1/2  text-[13px] mt-2 mb-1 text-gray flex flex-col gap-y-3">
                                <span className="color-[#6B6D71] text-sm">
                                    Нээлттэй ажлын байр
                                </span>
                                <h2 className="text-2xl font-medium border-l-4 border-[#FE7300] p-2">
                                    НҮҮРСНИЙ ХИМИЧ
                                </h2>
                                <p className="text-lg p-3">
                                    Олборлон борлуулж буй нүүрсний чанарыг цаг
                                    тухайд нь тодорхойлох, нүүрсний чанарын
                                    тайлан сар бүрээр нарийвчлан гаргаж
                                    танилцуулдаг байх
                                </p>
                            </div>
                        </div>
                        <div
                            className="w-full flex mb-5 rounded-xl"
                            onClick={() => navigate("/apply")}
                            style={{
                                background: "rgba(96,97,107,0.2)",
                                boxShadow: "4px 5px 10px",
                            }}
                        >
                            <div className="w-1/2 overflow-hidden h-full ">
                                <img
                                    src="http://taliinkhishig.mn/images/102.jpg?fbclid=IwAR3t6CP_64lrm9qV_OybA0ukQopLaVpT6EHEaYSHtc_nY5fJnn86xgQuEgA"
                                    className="hover:scale-105 transition duration-1000 h-full object-cover w-[95%]"
                                />
                            </div>
                            <div className="  w-1/2  text-[13px] mt-2 mb-1 text-gray flex flex-col gap-y-3">
                                <span className="color-[#6B6D71] text-sm">
                                    БАЙГАЛЬ ОРЧНЫ МЭРГЭЖИЛТЭН
                                </span>
                                <h2 className="text-2xl font-medium border-l-4 border-[#FE7300] p-2">
                                    БАЙГАЛЬ ОРЧНЫ МЭРГЭЖИЛТЭН
                                </h2>
                                <p className="text-lg p-3">
                                    Байгаль орчны өдөр тутмын ажлыг цаг тухай
                                    бүрт нь баг хамт олонтойгоо хамтран
                                    гүйцэтгэх.
                                </p>
                            </div>
                        </div>
                        <div
                            className="w-full flex mb-5 rounded-xl"
                            onClick={() => navigate("/apply")}
                            style={{
                                background: "rgba(96,97,107,0.2)",
                                boxShadow: "4px 5px 10px",
                            }}
                        >
                            <div className="w-1/2 overflow-hidden h-full">
                                <img
                                    src="http://taliinkhishig.mn/images/103.jpg?fbclid=IwAR1MNbirkn_5O4ocQVcGtnkHVm3XitB3DkUJI89CSgQduB5pGPRk4HdgPNQ"
                                    className="hover:scale-105 transition duration-1000 h-full object-cover w-[95%]"
                                />
                            </div>
                            <div className=" w-1/2  text-[13px] mt-2 mb-1 text-gray flex flex-col gap-y-3">
                                <span className="color-[#6B6D71] text-sm">
                                    Нээлттэй ажлын байр
                                </span>
                                <h2 className="text-2xl font-medium border-l-4 border-[#FE7300] p-2">
                                    ГЕОЛОГИ ИНЖЕНЕР
                                </h2>
                                <p className="text-lg p-3">
                                    Мэргэжилийн их дээд сургууль төгссөн
                                    Мэргэжлээрээ 3 болон түүнээс дээш жил
                                    ажилласан туршлагатай. Мэргэжилийн
                                    програмууд дээр ажиллах чадвартай
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mb-10"></div>
                </Container>
            </div>
        </div>
    );
}
