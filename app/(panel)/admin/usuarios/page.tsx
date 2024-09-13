import ListUser from '@/components/Panel/ListUser';
import { API_URL } from '@/const'
import { getAuthToken } from '@/lib/getUserDataServer'
import React from 'react'

export default async function UsuariosPage() {

  const token = getAuthToken();

  const listUser = await fetch(`${API_URL}/auth/listUser`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  })

  const data = await listUser.json()

  const listRoles = await fetch(`${API_URL}/auth/listroles`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  })

  const dataRoles = await listRoles.json();

  return (
    <>
      <ListUser list={data} listRoles={dataRoles} />
    </>
  )
}
