import { Meteors } from "../components/Meteors";
import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground }from "@/components/StarBackground";

function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Background Effects */}
            <StarBackground />
            <Meteors />

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}

            {/* Footer */}




        </div>
    );
}

export default Home;
