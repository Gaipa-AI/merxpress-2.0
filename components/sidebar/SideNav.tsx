'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Home, Store, Package, LogIn, LogOut, User } from 'lucide-react'
import Link from 'next/link'

type AccountType = 'Buyer' | 'Seller'

export interface SideNavProps {
	initialOpen?: boolean
}

export default function SideNav({ initialOpen = false }: SideNavProps) {
	const [open, setOpen] = useState(initialOpen)
	const [accountType, setAccountType] = useState<AccountType>('Buyer')

	useEffect(() => {
		const saved = typeof window !== 'undefined' ? window.localStorage.getItem('merx-account-type') : null
		if (saved === 'Buyer' || saved === 'Seller') setAccountType(saved)
	}, [])

	useEffect(() => {
		if (typeof window !== 'undefined') window.localStorage.setItem('merx-account-type', accountType)
	}, [accountType])

	return (
		<div className="fixed top-0 left-0 z-40">
			{/* Toggle Button */}
			<button
				aria-label="Toggle sidebar"
				onClick={() => setOpen((v) => !v)}
				className="m-3 inline-flex items-center justify-center rounded-md border border-gray-700/30 bg-[#0b1a2b] p-2 text-gray-200 shadow-sm hover:bg-[#112036] focus:outline-none"
			>
				{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
			</button>

			{/* Drawer */}
			<div
				className={`transition-transform ${open ? 'translate-x-0' : '-translate-x-full'} fixed top-0 left-0 h-screen w-72 bg-[#0b1a2b] text-gray-100 shadow-2xl border-r border-gray-700/30`}
			>
				<div className="flex items-center justify-between px-4 py-4 border-b border-gray-700/30">
					<div className="flex items-center gap-2">
						<img src="/logos/Merxpress-Logo.png" alt="Merxpress" className="h-8 w-auto" />
					</div>
					<button
						aria-label="Close sidebar"
						onClick={() => setOpen(false)}
						className="inline-flex items-center justify-center rounded-md p-2 hover:bg-[#112036]"
					>
						<X className="h-5 w-5" />
					</button>
				</div>

				<nav className="px-3 py-4 space-y-1">
					<SideNavLink href="/" icon={<Home className="h-5 w-5" />}>Home</SideNavLink>
					<SideNavLink href="/marketplace" icon={<Store className="h-5 w-5" />}>Marketplace</SideNavLink>
					<SideNavLink href="/products" icon={<Package className="h-5 w-5" />}>Products</SideNavLink>
				</nav>

				<div className="px-4 py-3 border-t border-gray-700/30">
					<p className="text-xs uppercase tracking-wide text-gray-400 mb-2">Account type</p>
					<div className="flex gap-2">
						<button
							onClick={() => setAccountType('Buyer')}
							className={`flex-1 rounded-md px-3 py-2 text-sm ${accountType === 'Buyer' ? 'bg-white text-[#0b1a2b]' : 'bg-[#112036] text-gray-200 hover:bg-[#162742]'}`}
						>
							Buyer
						</button>
						<button
							onClick={() => setAccountType('Seller')}
							className={`flex-1 rounded-md px-3 py-2 text-sm ${accountType === 'Seller' ? 'bg-white text-[#0b1a2b]' : 'bg-[#112036] text-gray-200 hover:bg-[#162742]'}`}
						>
							Seller
						</button>
					</div>
				</div>

				<div className="px-3 py-4 border-t border-gray-700/30">
					<p className="text-xs uppercase tracking-wide text-gray-400 mb-2">Stack account</p>
					{/*
						We route to Stack's built-in handler pages. These work with the StackProvider already mounted in app/layout.
					*/}
					<SideNavLink href="/handler/sign-in" icon={<LogIn className="h-5 w-5" />}>Login</SideNavLink>
					<SideNavLink href="/handler/account" icon={<User className="h-5 w-5" />}>Account</SideNavLink>
					<SideNavLink href="/handler/sign-out" icon={<LogOut className="h-5 w-5" />}>Logout</SideNavLink>
				</div>
			</div>
		</div>
	)
}

function SideNavLink({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
	return (
		<Link
			href={href}
			className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-200 hover:bg-[#112036] hover:text-white"
		>
			<span className="text-gray-300 group-hover:text-white">{icon}</span>
			<span>{children}</span>
		</Link>
	)
}


