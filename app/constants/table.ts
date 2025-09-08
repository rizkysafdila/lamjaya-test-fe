import type { TableColumn } from '@nuxt/ui'
import type { IProvinsi } from '~/types'
import { UBadge } from '#components'

export const provinsiColumns: TableColumn<IProvinsi>[] = [
  {
    accessorKey: 'number',
    header: 'No',
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: 'code',
    header: 'Kode',
    cell: ({ row }) => row.original.code,
  },
  {
    accessorKey: 'name',
    header: 'Nama Provinsi',
    cell: ({ row }) => row.original.name,
  },
  {
    accessorKey: 'is_active',
    header: 'Active',
    cell: ({ row }) => {
      const isActive = row.original.is_active === 1

      return isActive && h(UBadge, {
        icon: isActive ? 'lucide:check' : 'lucide:square',
        color: 'neutral',
        size: 'sm',
      })
    },
  },
]
