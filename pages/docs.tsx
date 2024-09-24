"use client";

import Layout from "@/components/layout";

import { Navbar, Footer } from "../src/components";
// import Hero from "../src/app/hero"; 

export default function Guide() {  // Keep this default export
  return (
    <Layout>
    <div>
      {/* Navbar at the top */}
      {/* <Navbar /> */}

      {/* Main content section */}
      <main className="min-h-screen">
        {/* <Hero /> */}
        <section className="p-8">
          <h1 className="text-3xl font-bold">Documentation</h1>
          <p>Here you'll find all the necessary docs.</p>
          {/* Add your docs content here */}
        </section>
      </main>

      {/* Footer at the bottom */}
      {/* <Footer /> */}
    </div>
    </Layout>
  );
}


