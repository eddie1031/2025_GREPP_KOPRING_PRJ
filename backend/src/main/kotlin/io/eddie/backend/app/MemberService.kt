package io.eddie.backend.app

import io.eddie.backend.dao.MemberRepository
import io.eddie.backend.domain.Member
import io.eddie.backend.dto.MemberDescription
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class MemberService(
    private val repository: MemberRepository
) {

    // CRUD
    @Transactional
    fun save(desc: MemberDescription): MemberDescription{
        val member = Member(
            name = desc.name,
            email = desc.email,
            role = desc.role,
        )
        repository.save(member)
        return desc
    }

}