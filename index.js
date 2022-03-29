
    val faucets: List<String>,
    val explorers: List<Explorer>?,
    val infoURL: String,
    val title: String?
    val title: String?,
    val nativeCurrency: NativeCurrency
)

fun List<Chain>.filterEIP3019Explorers() = map { it.copy(explorers = it.explorers?.filterEIP3019()) } 
