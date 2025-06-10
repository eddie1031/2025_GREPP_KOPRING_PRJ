import { Member, MemberFormData } from './types';

const API_URL = 'http://localhost:8080/api';


export const getAllMembers = async (): Promise<Member[]> => {
    try {

        const response = await fetch(`${API_URL}/members`);
        
        if ( !response.ok ) {
            throw new Error();
        }
         
        const result = await response.json(); // { "data" : ... , "message": ... }
        
        return result.data

    } catch (error) {
        console.log("회원 목록 조회 오류 발생!");
        throw new Error();
    }
};

export const createMember = async (memberData: MemberFormData) => {

};


export const updateMember = async (memberData: MemberFormData) => {

};

export const deleteMember = async (email: string): Promise<void> => {

};

export const updateMemberRole = async (email: string, role: string) => {

};
