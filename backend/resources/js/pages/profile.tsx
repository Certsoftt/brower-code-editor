import MyAppLayout from '@/layouts/app-layout'
import {Head, router, usePage} from '@inertiajs/react'
import {type BreadcrumbItem} from '@/types'
import {Typography, Stack, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper} from "@mui/material"

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'My Profile',
        href: '/profile'
    }
]
type User = {
    user:{
        id:number
        name: string
        email: string
    }[]
}
export default ()=>{
    const {user} = usePage<User>().props
    return (
        <MyAppLayout breadcrumbs={breadcrumbs}>
            <Head title="My Profile"/>
                {
                    user.map(profile=>
                        <Stack component="div" key={profile.id}>
                            <TableContainer component={Paper}>
                                <Table aria-label=""></Table>
                            </TableContainer>
                        </Stack>
                    )
                }
        </MyAppLayout>
    )
}