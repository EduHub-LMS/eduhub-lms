/**
 * @description Get user profile
 * @route GET /api/v1/users/profile
 * @access Private
 */
export const getUserProfile = (req, res) => {
    // The user object is attached to the request in the isAuthenticated middleware.
    const user = req.user; // This is the user object that is attached to the request in the isAuthenticated middleware.

    res.status(200).json({
        success: true,
        user,
    });
};