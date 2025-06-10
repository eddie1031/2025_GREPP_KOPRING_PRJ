"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserPlus } from "lucide-react"
import { Member, MemberFormData, Roles } from "@/lib/types"


interface MemberFormProps {
  editMode: boolean
  editingMember: Member | null
  onSubmitAction: (memberData: MemberFormData) => void
  onCancel?: () => void
}


export default function MemberForm({ 
  editMode = false, 
  editingMember = null, 
  onSubmitAction,
  onCancel 
}: MemberFormProps) {

  const [formData, setFormData] = useState<MemberFormData>({
    name: "",
    email: "",
    role: "BRONZE",
  })

  useEffect(() => {

  }, [editMode, editingMember])

  const handleSubmit = () => {

  }

  const handleCancel = () => {

  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{editMode ? "회원 정보 수정" : "새 회원 추가"}</CardTitle>
        <CardDescription>
          {editMode ? "회원 정보를 수정한 후 저장하세요." : "새로운 회원 정보를 입력하세요."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">이름</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="이름 입력"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="이메일 입력"
              disabled={editMode} // 수정 모드에서는 이메일 필드를 비활성화
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">등급</Label>
            <Select 
              value={formData.role}
              onValueChange={(value) => setFormData({ ...formData, role: value })}
            >
              <SelectTrigger id="role">
                <SelectValue placeholder="등급 선택" />
              </SelectTrigger>
              <SelectContent>
                {Roles.map((role) => (
                  <SelectItem key={role.value} value={role.value}>
                    {role.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          {editMode ? (
            <>
              <Button
                variant="outline"
                className="mr-2"
                onClick={handleCancel}
              >
                취소
              </Button>
              <Button onClick={handleSubmit}>저장</Button>
            </>
          ) : (
            <Button onClick={handleSubmit}>
              <UserPlus className="mr-2 h-4 w-4" />
              회원 추가
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
