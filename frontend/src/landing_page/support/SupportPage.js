import React, { useState } from "react";
import Hero from "./Hero";

import { Link } from "react-router-dom"; // 👈 add at top if not already

function SupportPage() {

    const [openIndex, setOpenIndex] = useState(0);

    const data = [
        {
            title: "Account Opening",
            items: [
                "Resident individual",
                "Minor",
                "Non Resident Indian (NRI)",
                "Company, Partnership, HUF and LLP",
                "Glossary"
            ]
        },
        {
            title: "Your Zerodha Account",
            items: [
                  "Your Profile",
                "Account Modification",
                "Clien Master Report(CMR) and Depositary Participant(DP)",
                "Nomination",
                "Transfer and conversion of securities"
            ]
        },
        {
            title: "Kite",
            items: [
                  "IPO",
                "Trading FAQ's",
                "Margin Trading Facility(MTF) and Margins",
                "Charts and orders",
                "General"
            ]
        },
        {
            title: "Funds",
            items: [
                  "Add money",
                "Withdraw money",
                "Add bank accounts",
                "eMandates"
            ]
        },
         {
            title: "Console",
            items: [
                  "Portfolio",
                "Corporate actions",
                "Funds statement",
                "Reports",
                "Profile",
                "Segments"
            ]
        },
         {
            title: "Coin",
            items: [
                  "Mutual funds",
                "National Pension Scheme(NPS)",
                "Fixed Deposit",
                "Features on Coin",
                "Payments and Orders",
                "General"
            ]
        },
    ];

    return (
        <>
            <Hero />

            <div className="container mt-4">
                <div className="row">

                    {/* LEFT */}
                    <div className="col-md-8">
                        {data.map((section, index) => (
                            <div className="support-card" key={index}>

                                <div
                                    className="support-card-header"
                                    onClick={() =>
                                        setOpenIndex(openIndex === index ? null : index)
                                    }
                                >
                                    <span>{section.title}</span>
                                    <span>{openIndex === index ? "▲" : "▼"}</span>
                                </div>

                                {openIndex === index && (
                                    <div className="support-card-body">
                                        <ul>
                                            {section.items.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                            </div>
                        ))}
                    </div>

                    {/* RIGHT */}
                    <div className="col-md-4">

                        <div className="updates-box">
                            <ul>
                                <li>Latest Intraday leverages</li>
                                <li>Surveillance measure - April 2026</li>
                            </ul>
                        </div>


                        <div className="quick-links-box">
                            <h6 className="quick-title">Quick links</h6>

                            <div className="quick-item">
                                <Link to="#">1. Track account opening</Link>
                            </div>

                            <div className="quick-item">
                                <Link to="#">2. Track segment activation</Link>
                            </div>

                            <div className="quick-item">
                                <Link to="#">3. Intraday margins</Link>
                            </div>

                            <div className="quick-item">
                                <Link to="#">4. Kite user manual</Link>
                            </div>

                            <div className="quick-item">
                                <Link to="/create-ticket">
                                    5. Learn how to create a ticket
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default SupportPage;