package io.eddie.backend.util

import io.eddie.backend.domain.Member
import io.eddie.backend.dto.MemberDescription
import io.eddie.backend.dto.Role

fun genMember(tagetName: String, targetEmail: String, targetRole: Role = Role.BRONZE): Member = Member(null, tagetName, targetEmail, targetRole)

fun genMemberDesc(
    actualName: String,
    actualEmail: String,
    actualRole: Role
): MemberDescription = MemberDescription(actualName, actualEmail, actualRole)