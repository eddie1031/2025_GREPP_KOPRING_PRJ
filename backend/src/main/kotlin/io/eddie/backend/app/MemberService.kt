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

    @Transactional(readOnly = true)
    fun findByEmail(email: String): Member {
        return repository.findByEmail(email) ?: throw NoSuchElementException("해당 회원은 존재하지 않습니다.")
    }

    @Transactional(readOnly = true)
    fun getDescByEmail(email: String): MemberDescription {
        val find = findByEmail(email)
        return MemberDescription(
            name = find.name,
            email = find.email,
            role = find.role,
        )
    }



}