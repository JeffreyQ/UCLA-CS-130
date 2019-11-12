"""Added owner column in Poll table

Revision ID: ebdc57616345
Revises: ec7ab4b48180
Create Date: 2019-11-12 01:33:53.459002

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ebdc57616345'
down_revision = 'ec7ab4b48180'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('poll', sa.Column('owner_id', sa.Integer(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('poll', 'owner_id')
    # ### end Alembic commands ###
