import NextAuth from "next-auth"
import { authConfig } from "@/auth.config"

const handler = NextAuth(authConfig)

// ✅ Explicitly assert correct handler type for Next.js 15/16
export const GET = handler as unknown as (
  req: Request,
  ctx: { params: any }
) => Promise<Response> | Response

export const POST = handler as unknown as (
  req: Request,
  ctx: { params: any }
) => Promise<Response> | Response
// export { GET, POST } from "@/auth"
// export const runtime = "edge"

// import { handlers } from "@/auth"
// export const { GET, POST } = handlers
