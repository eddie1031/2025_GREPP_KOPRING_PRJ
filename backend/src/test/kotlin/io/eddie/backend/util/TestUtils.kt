package io.eddie.backend.util

import io.eddie.backend.domain.Member
import io.eddie.backend.dto.MemberDescription
import io.eddie.backend.dto.MemberUpdateDescription
import io.eddie.backend.dto.Role

fun genMember(tagetName: String, targetEmail: String, targetRole: Role = Role.BRONZE): Member = Member(null, tagetName, targetEmail, targetRole)

fun genMemberDesc(
    actualName: String,
    actualEmail: String,
    actualRole: Role
): MemberDescription = MemberDescription(actualName, actualEmail, actualRole)

fun genMemberList(size: Int): List<Member> {
    val result: MutableList<Member> = mutableListOf()

    for (i in 1..size) {
        result.add(genMember("member$i", "member${i}@email.com"))
    }

    return result
}

fun genMemberDescList(size: Int): List<MemberDescription> {
    val result: MutableList<MemberDescription> = mutableListOf()

    for (i in 1..size) {
        result.add(genMemberDesc("member$i", "member${i}@email.com", Role.BRONZE))
    }

    return result
}


