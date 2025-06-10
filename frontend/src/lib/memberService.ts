import { Member, MemberFormData } from './types';

const API_URL = 'http://localhost:8080/api';


export const getAllMembers = async (): Promise<Member[]> => {

};

export const createMember = async (memberData: MemberFormData): Promise<Member> => {

};


export const updateMember = async (memberData: MemberFormData): Promise<Member> => {

};

export const deleteMember = async (email: string): Promise<void> => {

};

export const updateMemberRole = async (email: string, role: string): Promise<Member> => {

};
