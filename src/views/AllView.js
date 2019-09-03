import React from 'react'
import IndividualsList from 'IndividualsList'
import ROUTES from 'constants/routes'
import { useIndividuals } from 'store/useIndividuals'
import ViewContainer from 'ViewContainer'
import AppLink from 'AppLink'

function AllView() {
    const [individuals] = useIndividuals()
    return (
        <ViewContainer title="All">
            <IndividualsList individuals={individuals} />
            <AppLink to={ROUTES.add} iconBefore="add">
                Add
            </AppLink>
        </ViewContainer>
    )
}

export default AllView
