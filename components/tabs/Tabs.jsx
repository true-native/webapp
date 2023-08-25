"use client"

import React, { useState, useEffect } from 'react';

import AcaiGroup from '../../categories/AcaiGroup';
import GranolaGroup from '../..//categories/GranolaGroup';
import PitayaGroup from '../..//categories/PitayaGroup';
import DryGoodsGroup from '../..//categories/DryGoodsGroup';
import IqfGroup from '../..//categories/IqfGroup';
import OrganicIqfGroup from '../..//categories/OrganicIqfGroup';

const Tabs = ({products}) => {
    const [openTab, setOpenTab] = useState("organic-iqf-fruits");
    const [offset, setOffset] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);
    const [shadowTriggerPoint, setShadowTriggerPoint] = useState(0)

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);

        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });

        setWindowWidth(window.innerWidth);
        setShadowTriggerPoint(windowWidth <= 768 ? 100 : 200);

        return () => window.removeEventListener('scroll', onScroll);
    }, [windowWidth]);

    return (
        <>
            <ul
                className={`my-4 flex list-none flex-row whitespace-nowrap pl-0 sticky top-[90px] lg:top-[100px]
                        bg-white overflow-x-scroll scroll-hidden md:mx-auto md:w-full lg:justify-center
                            ${offset > shadowTriggerPoint ? "shadow-ul" : ""}`}
                role="tablist"
            >
                <li className={`border-b-2 px-6 py-4 uppercase font-medium text-center text-slate-400 cursor-pointer
                                ${(openTab === "organic-iqf-fruits" ? "border-b-primary-300 text-primary-300" : "")}`}
                    onClick={e => {
                        e.preventDefault();
                        setOpenTab("organic-iqf-fruits");
                    }}
                    data-toggle="tab"
                    href="#organic-iqf-fruits-products-group"
                    role="tablist"
                >
                    Organic IQF Fruits
                </li>
                <li className={`border-b-2 px-6 py-4 uppercase font-medium text-center text-slate-400 cursor-pointer
                                ${(openTab === "iqf-fruits" ? "border-b-primary-300 text-primary-300" : "")}`}
                    onClick={e => {
                        e.preventDefault();
                        setOpenTab("iqf-fruits");
                    }}
                    data-toggle="tab"
                    href="#iqf-fruits-products-group"
                    role="tablist"
                >
                    Conventional IQF Fruits
                </li>
                <li className={`border-b-2 px-6 py-4 uppercase font-medium text-center text-slate-400 cursor-pointer
                                ${(openTab === "acai" ? "border-b-primary-300 text-primary-300" : "")}`}
                    onClick={e => {
                        e.preventDefault();
                        setOpenTab("acai");
                    }}
                    data-toggle="tab"
                    href="#acai-products-group"
                    role="tablist"
                >
                    Açaí
                </li>
                <li className={`border-b-2 px-6 py-4 uppercase font-medium text-center text-slate-400 cursor-pointer
                                ${(openTab === "pitaya" ? "border-b-primary-300 text-primary-300" : "")}`}
                    onClick={e => {
                        e.preventDefault();
                        setOpenTab("pitaya");
                    }}
                    data-toggle="tab"
                    href="#pitaya-products-group"
                    role="tablist"
                >
                    Pitaya
                </li>
                <li className={`border-b-2 px-6 py-4 uppercase font-medium text-center text-slate-400 cursor-pointer
                                ${(openTab === "granola" ? "border-b-primary-300 text-primary-300" : "")}`}
                    onClick={e => {
                        e.preventDefault();
                        setOpenTab("granola");
                    }}
                    data-toggle="tab"
                    href="#granola-products-group"
                    role="tablist"
                >
                    Granola
                </li>
                <li className={`border-b-2 px-6 py-4 uppercase font-medium text-center text-slate-400 cursor-pointer
                                ${(openTab === "dry-goods" ? "border-b-primary-300 text-primary-300" : "")}`}
                    onClick={e => {
                        e.preventDefault();
                        setOpenTab("dry-goods");
                    }}
                    data-toggle="tab"
                    href="#dry-goods-products-group"
                    role="tablist"
                >
                    Dry Goods
                </li>
            </ul>
            <div className="py-3 flex w-11/12 mx-auto mb-10 3xl:w-9/12 3xl:min-h-[60vh]">
                <div className="tab-content tab-space">
                    <div className={openTab === "organic-iqf-fruits" ? "block" : "hidden"} id="organic-iqf-fruits-products-group">
                        <OrganicIqfGroup products={products.organic_iqf_fruits}/>
                    </div>
                    <div className={openTab === "iqf-fruits" ? "block" : "hidden"} id="iqf-fruits-products-group">
                        <IqfGroup products={products.iqf_fruits}/>
                    </div>
                    <div className={openTab === "acai" ? "block" : "hidden"} id="acai-products-group">
                        <AcaiGroup products={products.acai}/>
                    </div>
                    <div className={openTab === "pitaya" ? "block" : "hidden"} id="pitaya-products-group">
                        <PitayaGroup products={products.pitaya}/>
                    </div>
                    <div className={openTab === "granola" ? "block" : "hidden"} id="granola-products-group">
                        <GranolaGroup products={products.granola}/>
                    </div>
                    <div className={openTab === "dry-goods" ? "block" : "hidden"} id="dry-goods-products-group">
                        <DryGoodsGroup products={products.dry_goods}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tabs