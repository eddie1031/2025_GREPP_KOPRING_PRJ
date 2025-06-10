package io.eddie.backend.api

import io.eddie.backend.app.MemberService
import io.eddie.backend.dto.GeneralResponse
import io.eddie.backend.dto.MemberDescription
import io.eddie.backend.dto.MemberView
import jakarta.validation.Valid
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/members")
class MemberApiController(
    private val service: MemberService
) {

    @GetMapping
    fun getMemberViews(): GeneralResponse<List<MemberView>> {
        return GeneralResponse(
            data = service.getAllDescView(),
            message = "회원 목록을 정상적으로 조회했습니다!"
        )
    }

    // CRUD
    @PostMapping
    fun saveMember(
        @Valid @RequestBody saveRequest: MemberDescription
    ): GeneralResponse<MemberDescription> {
        return GeneralResponse(
            data = service.save(saveRequest),
            message = "회원이 성공적으로 등록되었습니다!"
        )
    }

    @GetMapping("/{email}")
    fun getMemberDescByEmail(
        @PathVariable email: String
    ): GeneralResponse<MemberDescription> {
        return GeneralResponse(
            data = service.getDescByEmail(email),
            message = "회원을 성공적으로 조회했습니다."
        )
    }


}