// Import Components
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";

const NotFound = () => {
    return (
        <main>
            <Header bg="bg-black"/>
            <section>
                <div className="h-screen flex items-center text-center">
                    <div className="container">
                        <h1 className="text-4xl sm:text-5xl xl:text-5xl 2xl:text-6xl font-sans text-black font-medium leading-none mt-10">404 - Page Not Found</h1>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default NotFound;