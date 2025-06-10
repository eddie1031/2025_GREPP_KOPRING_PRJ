import MemberManagement from "@/components/members/MemberManagement"

export default function Home() {
    return (
        <main className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-8">회원 관리 시스템</h1>
            <MemberManagement />
        </main>
    )
}