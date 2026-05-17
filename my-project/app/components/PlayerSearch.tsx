// app/components/PlayerSearch.tsx
// This component allows users to search for a player and displays their 
// information using the PlayerCard component

"use client";

import { useState } from "react";
import { getPlayerSummary } from "../lib/overfast";
import PlayerCard from "./PlayerCard";
import { Player } from "../lib/types";

export default function PlayerSearch() {
    // State for the search query, player data, and error message
    const [query, setQuery] = useState("");
    const [player, setPlayer] = useState<Player | null>(null);
    const [error, setError] = useState("");
    const [searchedBattleTag, setSearchedBattleTag] = useState("");

    // Function to handle the search action
    async function handleSearch() {
        try {
            // Fetch player summary from the Overfast API
            const data = await getPlayerSummary(query);
            setSearchedBattleTag(query.trim());
            setPlayer(data);
            setError("");
        } catch {
            setPlayer(null);
            setSearchedBattleTag("");
            setError("Player not found.");
        }
    }

    return (
        <>
            {/* Input field for the search query and a button to trigger the search */}
            <div className="flex flex-row gap-3">
                <input 
                    className="w-xl border border-rounded-[10px]"
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} />
                <button onClick={handleSearch}>Search</button>
            </div>


            {/* Display error message if player is not found */}
            {error && <p>{error}</p>}

            {/* Display the player card if player data is available */}
            {player && <PlayerCard player={player} searchedBattleTag={searchedBattleTag} />}
        </>
    );
}
