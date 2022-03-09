import React, { useState } from 'react'
import { memberData } from '../data/data'
import { Card } from './Card'
import { ModalCard } from './ModalCard'

export const Home = () => {

    const [membersListModal, setMembersListModal] = useState(memberData)
    const [membersList, setMembersList] = useState([])

    const [ selectedMember, setSelectedMember ] = useState()

    const addMember = () =>{
        let data = membersListModal.filter((m)=>m.id===selectedMember)
        let data1 = membersListModal.filter((m)=>m.id!==selectedMember)
        setMembersList([...membersList,data[0]])
        setMembersListModal(data1)
        setSelectedMember()
    }

    return (
        <div className='m-5'>
            <div className='text-center'>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    + Add Member
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Choose Members</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className='m-4 d-flex flex-wrap justify-content-center gap-3' style={{minHeight:"500px"}}>
                                    {membersListModal.length===0 && <p className='fs-3 text-center'>No Members to Add</p>}
                                    {membersListModal.map((member) => <ModalCard key={member.id} member={member} selectedMember={selectedMember} setSelectedMember={setSelectedMember}/>)}
                                </div>
                            </div>
                            <div className="modal-footer text-center">
                                <button type="button" className="btn btn-primary" disabled={selectedMember? "": "disabled"} onClick={addMember}>Add Member</button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='m-4 d-flex flex-wrap justify-content-center gap-3'>
                    {membersList.map((member) => <Card member={member} />)}
                </div>

            </div>
        </div>
    )
}
