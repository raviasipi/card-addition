import React from 'react'

export const ModalCard = ({ member, selectedMember, setSelectedMember }) => {
    const isSelected = selectedMember===member.id &&'border-success border-3'
    return (
        <div className={'border h-25 d-flex p-2 '+isSelected}  onClick={() => setSelectedMember(member.id)}>
            <img src={member.profile} alt={member.name} height="100px" />
            <div className='p-2 text-start d-flex flex-column'>
                <div className='fs-5'>{member.name}</div>
                <div className='fs-6'>{member.address}</div>
            </div>
        </div>
    )
}
