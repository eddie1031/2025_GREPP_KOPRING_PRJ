package io.eddie.backend.app

import io.eddie.backend.dao.MemberRepository
import io.eddie.backend.dto.Role
import io.eddie.backend.util.genMember
import io.eddie.backend.util.genMemberDesc
import io.kotest.core.spec.style.BehaviorSpec
import io.kotest.core.spec.style.DescribeSpec
import io.kotest.core.spec.style.FunSpec
import io.kotest.core.spec.style.StringSpec
import io.kotest.matchers.shouldBe
import io.mockk.every
import io.mockk.mockk
import io.mockk.verify
import org.junit.jupiter.api.Test

class MemberServiceUnitTest {

    val repository = mockk<MemberRepository>()
    val service = MemberService(repository)

    @Test
    fun `적절한 데이터가 들어온다면 저장된 후 MemberDescription을 반환한다`() {

        val actualName = "member1"
        val actualEmail = "member1@email.com"
        val actualRole = Role.BRONZE

        val memberDesc = genMemberDesc(actualName, actualEmail, actualRole)
        val member = genMember(actualName, actualEmail, actualRole)

        every { repository.save(member) } returns member

        val expectedMemberDesc = service.save(memberDesc)

        expectedMemberDesc.name shouldBe actualName
        expectedMemberDesc.email shouldBe actualEmail
        expectedMemberDesc.role shouldBe actualRole

    }

}

// #1 BDD
class MemberServiceUnitTestWithKoTest : BehaviorSpec({

    val repository = mockk< MemberRepository>()
    val service = MemberService(repository)

    // Given When Then

    Given("적절한 데이터가 주어지고") {

        val actualName = "member1"
        val actualEmail = "member1@email.com"
        val actualRole = Role.BRONZE

        val memberDesc = genMemberDesc(actualName, actualEmail, actualRole)
        val member = genMember(actualName, actualEmail, actualRole)

        every { repository.save(member) } returns member

        When("memberService의 save를 호출하면") {

            val expected = service.save(memberDesc)

            Then("repository의 save가 한 번 호출될 것이다.") {
                verify(exactly = 1) {
                    repository.save(member)
                }
            }

            Then("반환된 memberDescription의 값은 주어진 값과 동일할 것이다.") {

                expected.name shouldBe actualName
                expected.email shouldBe actualEmail
                expected.role shouldBe actualRole

            }


        }

    }

})

// #2 함수 기반 스타일
class MemberServiceUnitTestWithFunSpec : FunSpec({

    val repository = mockk< MemberRepository>()
    val service = MemberService(repository)

    test("적절한 데이터가 들어온다면 저장된 후 MemberDescription을 반환한다.") {

        // Given
        val actualName = "member1"
        val actualEmail = "member1@email.com"
        val actualRole = Role.BRONZE

        val memberDesc = genMemberDesc(actualName, actualEmail, actualRole)
        val member = genMember(actualName, actualEmail, actualRole)

        every { repository.save(member) } returns member

        // When
        val expectedMemberDesc = service.save(memberDesc)

        // Then
        expectedMemberDesc.name shouldBe actualName
        expectedMemberDesc.email shouldBe actualEmail
        expectedMemberDesc.role shouldBe actualRole

    }


})

// #3. StringSpec
class MemberServiceUnitTestWithStringSpec: StringSpec({

    val repository = mockk<MemberRepository>()
    val service = MemberService(repository)

    "적절한 데이터가 들어온다면 저장된 후 MemberDescription을 반환한다." {

        // Given
        val actualName = "member1"
        val actualEmail = "member1@email.com"
        val actualRole = Role.BRONZE

        val memberDesc = genMemberDesc(actualName, actualEmail, actualRole)
        val member = genMember(actualName, actualEmail, actualRole)

        every { repository.save(member) } returns member

        //  when
        val expected = service.save(memberDesc)

        // then
        verify(exactly = 1) { repository.save(member) }

        expected.name shouldBe actualName
        expected.email shouldBe actualEmail
        expected.role shouldBe actualRole

    }



})

// #4. describe-it
class MemberServiceUnitTestWIthDescribeSpec: DescribeSpec({

    val repository = mockk<MemberRepository>()
    val service = MemberService(repository)

    describe("MemberService의 save 메서드는") {

        context("적절한 데이터가 주어진다면") {

            val actualName = "member1"
            val actualEmail = "member1@email.com"
            val actualRole = Role.BRONZE

            val memberDesc = genMemberDesc(actualName, actualEmail, actualRole)
            val member = genMember(actualName, actualEmail, actualRole)

            every { repository.save(member) } returns member

            it("데이터를 저장하고, 입력한 정보와 동일한 MemberDescription을 반환해야한다.") {

                val expected = service.save(memberDesc)

                verify(exactly = 1) { repository.save(member) }

                expected.name shouldBe actualName
                expected.email shouldBe actualEmail
                expected.role shouldBe actualRole

            }

        }

    }


})



