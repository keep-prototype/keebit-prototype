import React from "react";

// import { useNavigate } from 'react-router';

export const Home = () => {
    // const navigate = useNavigate();
    // const handleAptCheck = () => {
    //     navigate('/Login')
    // }

    return (
        <main className="flex flex-col items-center w-screen h-screen">
            <div> 
                <section className="mb-7">
                    <h1 className="font-semibold text-3xl text-center p-3">KEEBIT</h1>
                    <p className="font-light text-md text-center p-1 px-6">우리의 서비스를 통해 아파트 커뮤니티의 모든 예약을 쉽게 관리하세요.</p>
                </section>
                <section className="w-screen flex flex-col justify-center items-center gap-3.5">
                    <button className="p-3.5 w-11/12 text-main-orange text-center text-main-orange text-sm items-center justify-center border-2 rounded-lg">
                        아파트 연동
                    </button>
                    <button className="p-3.5 w-11/12 text-main-orange text-center text-main-orange text-sm items-center justify-center border-2 rounded-lg">
                        AI 매칭 예약
                    </button>
                </section>
                <div className="p-12">
                    <img src="https://unicorn-images.b-cdn.net/62c76b76-fc3b-46fc-99a5-35151ff43bf6?optimizer=gif" alt="배경이미지1" />
                </div>
            </div>
            <div className="mt-10 mb-56">
                <section className="flex flex-col gap-3">
                    <p className="text-center">공지사항</p>
                    <ui className="text-center font-light">
                        <li>커뮤니티 시설 이용 안내</li>
                        <li>운영 시간 및 예약 필수 안내</li>
                        <li>외부인 출입 및 무단 이용 금지 안내</li>
                    </ui>
                </section>
                <section className="mt-13 w-screen flex flex-col justify-center items-center">
                    <button className="p-3 w-11/12 text-main-orange text-center text-main-orange text-sm items-center justify-center border-2 rounded-sm">
                        더보기
                    </button>
                </section>
            </div>
            <div className="flex flex-col items-center">
                <section className="w-screen flex flex-col justify-center items-center gap-8">
                    <h1 className="text-2xl">골프 연습장</h1>
                    <button className="py-3 px-10 text-center text-sm bg-main-orange border-0 rounded-sm">예약하기</button>
                </section>
                <section className="p-5">
                    <img src="https://unicorn-images.b-cdn.net/b9cabfed-26a5-4f9c-aeae-0b03dd5a2708?optimizer=gif" alt="배경이미지2" />
                </section>
                <section className="w-screen flex flex-col items-center gap-3.5 mt-5 mb-28">
                    <button className="p-3.5 w-11/12 text-main-orange text-center text-main-orange text-sm items-center justify-center border-2 rounded-lg">
                        예약확인
                    </button>
                    <button className="p-3.5 w-11/12 text-main-orange text-center text-main-orange text-sm items-center justify-center border-2 rounded-lg">
                        내 정보
                    </button>
                    <button className="p-3.5 w-11/12 text-main-orange text-center text-main-orange text-sm items-center justify-center border-2 rounded-lg">
                        로그아웃
                    </button>
                </section>
            </div>
            <div className="flex flex-col items-center">
                <section className="w-screen flex flex-col justify-center items-center gap-3">
                    <h1 className="text-3xl font-semibold">FAQ</h1>
                    <p>Got questions? We've got answers.</p>
                </section>
                <section className="w-screen flex flex-col justify-center items-center py-24 p-7">
                    <img src="https://unicorn-images.b-cdn.net/25e93e5c-0733-4fb7-bc9a-350c13430615?optimizer=gif" alt="배경이미지3" />
                </section>
                <section className="w-screen flex flex-col items-center gap-8">
                    <div className="w-screen flex flex-col border-0 px-14">
                        <p className="w-screen flex text-main-orange gap-1.5">질문하기 <span className="text-main-orange font-light">&rarr;</span></p>
                    </div>    
                    <button className="p-2.5 w-11/12 text-main-orange text-center text-main-orange text-sm font-semibold items-center justify-center border-2 rounded-sm">
                        Visit FAQs
                    </button>
                </section>
            </div>
            <footer className="w-screen flex flex-col items-center justify-center">
                <div className="w-screen flex py-10 font-light items-start px-4">
                    &#9426; 2025 키빗 (주)코드클립
                </div>
            </footer>
        </main>
    );
}