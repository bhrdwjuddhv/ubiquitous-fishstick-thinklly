export default function UserTableCell({user}) {
    return (
        <>
            <div className="flex items-center gap-4 p-4 bg-[#F9F1DC] rounded-xl border border-[#C8553D]/10 hover:border-[#C8553D]/30 hover:shadow-md transition-all duration-300">

                <div className="flex-shrink-0">
                    <img
                        src={user.picture.medium}
                        alt={`${user.name.first} ${user.name.last}`}
                        className="w-16 h-16 rounded-full object-cover border-2 border-[#C8553D]/20"
                    />
                </div>

                <div className="flex-1 min-w-0">

                    <h3 className="font-semibold text-lg text-[#222222] truncate">
                        {`${user.name.title} ${user.name.first} ${user.name.last}`}
                    </h3>

                    <span className="inline-block mt-1 px-3 py-1 text-xs font-medium rounded-full bg-[#F2D06B]/40 text-[#C8553D] capitalize">
            {user.gender}
        </span>

                    <div className="mt-3 flex flex-col md:flex-row md:items-center gap-1 md:gap-6 text-sm text-[#666666]">
                        <span>{user.cell}</span>

                        <span className="truncate">
                {user.email}
            </span>
                    </div>

                </div>
            </div>
        </>
    )
}