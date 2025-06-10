"use client"

import { useState, useEffect } from "react"
import { Member, MemberFormData } from "@/lib/types"
import MemberForm from "./MemberForm"
import MemberList from "./MemberList"
import * as memberService from "../../lib/memberService"


export default function MemberManagement() {

    const [members, setMembers] = useState<Member[]>([])

    const [editMode, setEditMode] = useState(false)
    const [editingMember, setEditingMember] = useState<Member | null>(null)

    useEffect(() => {

    }, [])


    const handleAddMember = async (memberData: MemberFormData) => {
        try {

        } catch (error) {
            console.error("회원 추가 실패:", error)
        }
    }


    const handleDeleteMember = async (email: string) => {
        try {

        } catch (error) {
            console.error("회원 삭제 실패:", error)
        }
    }


    const handleStartEdit = (member: Member) => {
    }


    const handleCancelEdit = () => {
    }

    const handleSaveEdit = async (memberData: MemberFormData) => {
        if (!editingMember) return

        try {

        } catch (error) {
            console.error("회원 수정 실패:", error)
        }
    }


    const handleRankChange = async (email: string, newRole: string) => {
        try {

        } catch (error) {
            console.error("등급 변경 실패:", error)
        }
    }

    return (
        <div className="space-y-8">
            <MemberForm
                editMode={editMode}
                editingMember={editingMember}
                onSubmitAction={editMode ? handleSaveEdit : handleAddMember}
                onCancel={handleCancelEdit}
            />
            <MemberList
                members={members}
                onEditAction={handleStartEdit}
                onDeleteAction={handleDeleteMember}
                onRankChangeAction={handleRankChange}
            />
        </div>
    )
}
