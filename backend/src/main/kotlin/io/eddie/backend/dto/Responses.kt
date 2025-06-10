package io.eddie.backend.dto

data class GeneralResponse<T>(
    val data: T?,
    val message: String,
)
