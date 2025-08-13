"use server"
// app/lib/auth-actions.js
'use server'
import { createSession } from './session'

export async function startSession(userId) {
  await createSession(userId)
}
