"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Edit2, Trash2 } from "lucide-react"
import { Member, Roles, getRankColor, getRankLabel } from "@/lib/types"


interface MemberListProps {
  members: Member[]
  onEditAction: (member: Member) => void
  onDeleteAction: (email: string) => void
  onRankChangeAction: (email: string, rank: string) => void
}


export default function MemberList({ 
  members, 
  onEditAction, 
  onDeleteAction, 
  onRankChangeAction 
}: MemberListProps) {

  return (
    <Card>
      <CardHeader>
        <CardTitle>회원 목록</CardTitle>
        <CardDescription>총 {members.length}명의 회원이 등록되어 있습니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>이름</TableHead>
              <TableHead>이메일</TableHead>
              <TableHead>등급</TableHead>
              <TableHead>등급 변경</TableHead>
              <TableHead>관리</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>

            {members.map((member, idx) => (
              <TableRow key={idx + 1}>
                <TableCell>{idx + 1}</TableCell>

                <TableCell>{member.name}</TableCell>

                <TableCell>{member.email}</TableCell>

                <TableCell>
                  <Badge className={getRankColor(member.role)}>
                    {getRankLabel(member.role)}
                  </Badge>
                </TableCell>


                <TableCell>
                  <Select
                    value={member.role}
                    onValueChange={(value: string) => onRankChangeAction(member.email, value)}
                  >
                    <SelectTrigger className="w-[120px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Roles.map((rank) => (
                        <SelectItem key={rank.value} value={rank.value}>
                          {rank.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </TableCell>


                <TableCell>
                  <div className="flex space-x-2">

                    <Button
                      variant="outline" 
                      size="icon" 
                      onClick={() => onEditAction(member as Member)}
                    >
                      <Edit2 className="h-4 w-4" />
                    </Button>

                    <Button
                      variant="outline"
                      size="icon"
                      className="text-red-500 hover:text-red-700"
                      onClick={() => onDeleteAction(member.email as string)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>

                  </div>
                </TableCell>

              </TableRow>
            ))}

          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
