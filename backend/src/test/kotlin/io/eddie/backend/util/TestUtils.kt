package io.eddie.backend.util

import io.eddie.backend.domain.Member
import io.eddie.backend.dto.Role

fun genMember(tagetName: String, targetEmail: String): Member = Member(null, tagetName, targetEmail, Role.BRONZE)