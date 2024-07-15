import React, { useState, useEffect } from "react";
import data from "../assets/dataGlasses.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const arrGlasses = data;

const GlassesList = () => {
    const [kinh, setKinh] = useState("");
    const [chon, setChon] = useState(false);
    const [thongSo, setThongSo] = useState("");
    const notify = () => toast("🦄 Bạn đã đặt kính thành công!");

    return (
        <>
            <div
                className="glasses-header "
                // style={{ background: "rgba(0, 0, 0, 0.2)" }}
            >
                Try Glasses App Online
            </div>
            <div className="container model py-20 flex">
                <div className="w-4/12 listKinh ">
                    {arrGlasses.map((glass, index) => {
                        let { price, url, name, desc } = glass;
                        return (
                            <div className="shopKinh py-3" key={index}>
                                <a
                                    href="#!"
                                    onClick={() => {
                                        setKinh(url);
                                        setThongSo(glass);
                                        setChon(true);
                                    }}
                                >
                                    <img
                                        src={url}
                                        width={150}
                                        alt="product image"
                                    />
                                </a>
                            </div>
                        );
                    })}
                </div>
                <div className="w-4/12 flex justify-center">
                    <div className="chonKinh">
                        <img
                            src="/glassesImage/model.jpg"
                            className="character"
                            alt=""
                        />
                        <img src={kinh} className="glasses" alt="" />
                    </div>
                </div>
                <div className="w-4/12">
                    <div className="bg-white border border-gray-200 rounded-lg shadow py-4 px-5">
                        <h2 className="text-center text-3xl font-bold mb-3 text-purple-600">
                            {thongSo
                                ? "Thông tin sản phẩm"
                                : "Chọn kính để xem thông tin sản phẩm!"}
                        </h2>
                        <h3 className="text-xl">
                            Tên kính:
                            {thongSo
                                ? " " + thongSo.name
                                : " Bạn chưa chọn kính nào"}
                        </h3>
                        <h3 className="text-xl">
                            Giá:
                            {thongSo
                                ? " " + thongSo.price + " 000 VNĐ"
                                : " Bạn chưa chọn kính nào"}
                        </h3>
                        <h3 className="text-xl">
                            Mô tả:
                            {thongSo
                                ? " " + thongSo.desc
                                : " Bạn chưa chọn kính nào"}
                        </h3>
                        {chon && (
                            <button
                                id="select"
                                data-is-selected={thongSo ? thongSo : ""}
                                className="custom-button my-5"
                                onClick={notify}
                            >
                                Chốt đơn
                                <ToastContainer />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default GlassesList;
