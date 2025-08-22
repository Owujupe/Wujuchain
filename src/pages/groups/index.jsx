import { getContract } from "thirdweb";
import { useReadContract } from "thirdweb/react";
import { client } from "../../client";
import { polygonAmoy } from "thirdweb/chains";
import { CROWDFUNDING_FACTORY } from "../../constants/address";
import GroupCard from "../../components/groupcard";
import styles from "./styles.module.scss";
import { useState, useEffect } from "react";

const GROUPS = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(16); // Will be set based on screen size

  const contract = getContract({
    client: client,
    chain: polygonAmoy,
    address: CROWDFUNDING_FACTORY,
  });

  const { data: groups, isPending } = useReadContract({
    contract,
    method:
      "function getAllCampaigns() view returns ((address campaignAddress, address owner, string groupname, uint256 creationTime, uint256 groupSize)[])",
    params: [],
  });

  // Responsive pagination based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(16); // Desktop: 4x4 grid
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(12); // Tablet: 3x4 grid
      } else {
        setItemsPerPage(4); // Mobile: 2x2 grid
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset to first page when items per page changes
  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  // Pagination logic
  const totalPages = groups ? Math.ceil(groups.length / itemsPerPage) : 0;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentGroups = groups ? groups.slice(startIndex, endIndex) : [];

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Previous button
    if (currentPage > 1) {
      pages.push(
        <button
          key="prev"
          onClick={() => handlePageChange(currentPage - 1)}
          className={styles.pageButton}
        >
          Previous
        </button>
      );
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`${styles.pageButton} ${
            currentPage === i ? styles.activePage : ""
          }`}
        >
          {i}
        </button>
      );
    }

    // Next button
    if (currentPage < totalPages) {
      pages.push(
        <button
          key="next"
          onClick={() => handlePageChange(currentPage + 1)}
          className={styles.pageButton}
        >
          Next
        </button>
      );
    }

    return <div className={styles.pagination}>{pages}</div>;
  };

  return (
    <main className={`${styles.main}`}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Groups:</h1>

        {isPending ? (
          <div className={styles.loading}>
            <p>Loading groups...</p>
          </div>
        ) : groups && groups.length > 0 ? (
          <>
            <div className={styles.grid}>
              {currentGroups.map((group) => (
                <div key={group.campaignAddress}>
                  <GroupCard groupAddress={group.campaignAddress} />
                </div>
              ))}
            </div>

            {renderPagination()}

            <div className={styles.pageInfo}>
              <p>
                Showing {startIndex + 1}-{Math.min(endIndex, groups.length)} of{" "}
                {groups.length} groups
              </p>
            </div>
          </>
        ) : (
          <div className={styles.noGroups}>
            <p>No groups found</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default GROUPS;
