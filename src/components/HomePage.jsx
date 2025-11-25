import React from "react";

import styles from './HomePage.module.css'; // 1. Import

function HomePage() {

    return (

        <main>
            <section className={`section-bg-white ${styles.hero}`} >
                <div className="container">
                <h2>Welcome to My Portfolio</h2>
                <p>This is the home section where I introduce myself and my work.</p>
            
            </div>
            </section>
        </main>

    );
}
export default HomePage;