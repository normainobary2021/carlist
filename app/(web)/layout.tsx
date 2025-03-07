import NavBar from "@/components/NavBar";

export default function WebLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col w-full h-auto">
            <NavBar />
            <main>{children}</main>
        </div>
    )
}